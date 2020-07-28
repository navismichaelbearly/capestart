import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api",
  timeout: 50000
});

export const getBooks = () => instance.get("/Books");

export const getBook = id => instance.get(`/Books/${id}`);

export const getAuthors = () => instance.get("/Authors");

export const getAuthor = id => instance.get(`/Authors/${id}`);
