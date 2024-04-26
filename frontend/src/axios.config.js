import axios from 'axios';
const baseURL='http://localhost:4000'

export const axiosConfig= axios.create(
    {
        baseURL:baseURL,

    }
)
// Add a request interceptor
axiosConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = "imam-syed"; // Retrieve the token from local storage or wherever it's stored
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    console.log('Request sent:', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
    function (response) {
      // Do something with successful response
      console.log('Response received:', response);
      return response;
    },
    function (error) {
      // Do something with response error
      console.error('Response error:', error);
      return Promise.reject(error);
    }
  );
