import axios from "axios";

const API_URL = "https://api-udacity.herokuapp.com";

//const API_URL = "https://custom-readable-api.herokuapp.com";

//Ajuda com criação dos requests Cláudio Rocha

axios.defaults.headers.common["Authorization"] = "qualquer_coisa";

const getPosts = () =>
  axios({
    url: API_URL + "/posts",
    method: "GET"
  }).then(response => {
    return response.data;
    //console.log(response.data)
  });

export const APIfetchPost = id => {
  //console.log("fetchId: ", id);
  return axios({
    url: API_URL + `/posts/${id}`,
    method: "GET"
  }).then(response => {
    //console.log(">>>", response.data);
    return response.data;
  });
};

export const fetchCategories = () => {
  return axios({
    url: API_URL + "/categories",
    method: "GET"
  }).then(response => {
    //console.log(response.data);
    return response.data;
  });
};

export const APIaddposts = post => {
  return axios({
    url: API_URL + "/posts",
    method: "POST",
    data: { ...post }
  }).then(response => {
    return response.data;
  });
};

export const APIdelPosts = id => {
  return axios({
    url: API_URL + `/posts/${id}`,
    method: "DELETE"
  }).then(response => {
    return response.data;
  });
};

export const APIfetchComments = postId => {
  return axios({
    url: API_URL + `/posts/${postId}/comments`,
    method: "GET"
  }).then(response => {
    //console.log(response.data);
    return response.data;
  });
};

export const APIfetchComment = commentId => {
  return axios({
    url: API_URL + `/comments/${commentId}`,
    method: "GET"
  }).then(response => {
    //console.log(response.data);
    return response.data;
  });
};

export default getPosts;
