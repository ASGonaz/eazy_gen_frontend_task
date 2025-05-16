import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { AuthResponse } from "../Types/User";

const api = `${process.env.REACT_APP_BACKEND_BASEURL}/api/v1/auth`;

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<AuthResponse>(api + "/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  name: string,
  password: string,
  passwordConfirm:string
) => {
  try {
    const data = await axios.post<AuthResponse>(api + "/signup", {
      email: email,
      name: name,
      password: password,
      passwordConfirm:passwordConfirm
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
