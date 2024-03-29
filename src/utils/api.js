import axios from "axios";

const newApi = axios.create({
  baseURL: "https://andrews-fe-project.herokuapp.com/api",
});

export const getArticles = () => {
  return newApi.get("/articles").then((response) => {
    return response.data;
  });
};

export const getSingleArticles = (article_id) => {
  return newApi.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
};

export const upVoteAnArticle = (article_id) => {
  return newApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data;
    });
};

export const displayCommentsOfSelectedArticle = (article_id) => {
  return newApi.get(`/articles/${article_id}/comments`).then((response) => {
    console.log(response.data, " << response data");
    return response.data;
  });
};

export const postCommentToExistingArticle = (article_id, username, body) => {
  //article_id, username, comment
  return newApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((response) => {
      console.log(response, "<<< response");
      return response.data;
    });
};

export const sorteArticlesBy = (sortBy, order) => {
  return newApi
    .get(`/articles?sort_by=${sortBy}&order=${order}`)
    .then((response) => {
      return response.data;
    });
};

export const deleteCommentFromArticle = (comment_id) => {
  return newApi.delete(`/comments/${comment_id}`).then((response) => {
    return response.data;
  });
};
