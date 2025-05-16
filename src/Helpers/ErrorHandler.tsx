import axios from "axios";
import { toast } from "react-toastify";

interface ValidationError {
  value: string;
  msg: string;
  param: string;
  location: string;
}

interface ErrorResponse {
  status: string;
  errors?: ValidationError[];
  message?: string;
}

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const response = error.response?.data as ErrorResponse;

    // Handle validation errors array format
    if (response?.errors && Array.isArray(response.errors)) {
      response.errors.forEach(error => {
        toast.error(error.msg);
      });
      return;
    }

    // Handle single message error format
    if (response?.message) {
      toast.error(response.message);
      return;
    }

    // Handle unauthorized error
    if (error.response?.status === 401) {
      toast.error("Please login");
      window.history.pushState({}, "LoginPage", "/login");
      return;
    }

    // Fallback error message
    toast.error("An error occurred. Please try again.");
  }
};
