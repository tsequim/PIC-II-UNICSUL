import axios from "axios";
import { PUBLIC_BACKEND } from "@env";

const baseURL = PUBLIC_BACKEND;

const apiConfig = axios.create({
  baseURL: "http://hmg-api.consupet.com.br",
});

console.log();

export { apiConfig };
