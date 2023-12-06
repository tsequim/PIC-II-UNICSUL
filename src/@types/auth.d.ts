import { IUser } from "./user";
export interface ISignup {
  username: string;
  password: string;
  confirmationCode: string;
  role: "Buyer";
}

export interface ILogin {
  password: string;
  role: "Buyer";
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IRefreshToken {
  refreshToken: string;
}

export interface INewPassword {
  currentPassword: string;
  newPassword: string;
}

export interface INewPasswordConfirm {
  code: string;
  newPassword: string;
}
