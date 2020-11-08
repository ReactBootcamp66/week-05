import axios from 'axios';

// https://jsonplaceholder.typicode.com/posts
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = () => {
  return instance.get('/posts');
};

export const getPostById = (postId) => {
  return instance.get(`/posts/${postId}`);
};

export const getPhotosById = (postId) => {
  return instance.get(`/posts/${postId}/photos`);
};

export const getCommentsById = (postId) => {
  return instance.get(`/posts/${postId}/comments`);
};

export const createNewPost = (post) => {
  /*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  */
  return instance.post(`/posts`, post);
};

export default instance;
