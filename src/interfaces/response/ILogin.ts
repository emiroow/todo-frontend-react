export interface ILoginResponse {
  user?: User;
  token?: string;
}
export interface User {
  _id?: string;
  fullName?: string;
  email?: string;
  user?: string;
  isActive?: boolean;
  __v?: number;
}
