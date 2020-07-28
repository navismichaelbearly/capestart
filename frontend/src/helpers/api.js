import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 50000
});

export const getBooks = () => instance.get("/book_list");

export const getBook = id => instance.get(`/book/${id}`);

export const getAuthors = () => instance.get("/author_list");

export const getAuthor = id => instance.get(`/author/${id}`);
