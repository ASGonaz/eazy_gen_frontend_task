export type UserProfileToken = {
  name: string;
  email: string;
  token: string;
};

export type UserProfile = {
  _id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AuthResponse = {
  data: UserProfile;
  token: string;
};
