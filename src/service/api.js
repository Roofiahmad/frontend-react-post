import axios from "axios";
import { ENDPOINTS, LIMIT } from "../utils/constants";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getArticles = (limit = LIMIT, offset = 0) =>
  API.get(`${ENDPOINTS.ARTICLES}${limit}/${offset}`);

export const getArticleById = (id) => API.get(`${ENDPOINTS.ARTICLE}${id}`);

export const createArticle = (data) => API.post(ENDPOINTS.ARTICLE, data);

export const updateArticle = (id, data) =>
  API.put(`${ENDPOINTS.ARTICLE}${id}`, data);

export const deleteArticle = (id) => API.delete(`${ENDPOINTS.ARTICLE}${id}`);
