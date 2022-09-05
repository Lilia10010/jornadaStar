import { api } from "./";

export const getShips = async (page: number) => {
  const response = await api.get(`/starships/?page=${page}`);
  return response;
};
