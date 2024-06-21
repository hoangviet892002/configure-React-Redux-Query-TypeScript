import { datas } from "../types/data.type";
import http from "../utils/http";

export const getDatasApi = () => {
  return http.get<datas>("/upload");
};
