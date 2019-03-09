import axios from "axios";

axios.defaults.headers.common["Authorization"] = "qualquer_coisa";

const API_URL = "http://localhost:3001";

const getPosts = () =>
  axios({
    url: API_URL + "/posts",
    method: "GET"
  }).then(response => {
    return response.data;
    //console.log(response.data)
  });

  export const getCategories = () =>
  axios({
    url: API_URL + "/categories",
    method: "GET"
  }).then(response => {
    return response.categories
    console.log(response.categories)
  });

 

export const APIaddposts = post =>
  axios({
    url: API_URL + "/posts",
    method: "POST"
  }).then(response => {
    return response.data;
  });

export default getPosts;
