import axios from "axios";

const newApi = axios.create({
  baseURL: "https://andrews-fe-project.herokuapp.com/api",
});

export const getArticles = () => {
  return newApi.get("/articles").then((response) => {
    return response.data;
  });
};
