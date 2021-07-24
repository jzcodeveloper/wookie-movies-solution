import { AxiosRequestConfig } from "axios";
import { createBrowserHistory } from "history";

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
export const API_TOKEN = process.env.REACT_APP_API_TOKEN || "";

export const AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: API_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  },
};

export const history = createBrowserHistory();
