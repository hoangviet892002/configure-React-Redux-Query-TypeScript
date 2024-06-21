import axios, { AxiosInstance } from "axios";
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
const http = new Http().instance;
export default http;
