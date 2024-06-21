import { ResponseSuccessful } from "../types/reponse.type";
import { User } from "../types/user.type";
import http from "../utils/http";

export const login = (username: string, password: string) => {
  return http.post<ResponseSuccessful<User>>("/auth/login", {
    username,
    password,
  });
};
