import React from "react";
import { getDatasApi } from "../apis/data.api";

const DataService = () => {
  const getDatas = (page: number) => {
    const response = getDatasApi();
    return response;
  };
  return { getDatas };
};

export default DataService;
