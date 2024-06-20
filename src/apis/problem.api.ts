import { Problems } from "../types/problem.type";
import http from "../utils/http";

export const getProblems = (page: string) => {
  return http.get<Problems>(`/problems?page=${page}`);
};
