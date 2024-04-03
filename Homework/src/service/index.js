import {req} from "./axios"

export const posts = {
  GET: async () => req.get("/posts"),
  CREATE: async (data) => req.post("/posts", data),
  UPDATE: async (data, id) => req.put(`/posts/${id}`, data),
  DELETE: async (id) => req.delete(`/posts/${id}`),
};