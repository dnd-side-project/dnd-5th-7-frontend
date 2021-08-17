import axios from "axios";

export const instance = axios.create({
  baseURL: "https://tido-diary.herokuapp.com/diaries",
  withCredentials: true,
});
