import axios from "axios";

const domain = localStorage.getItem("DOMAIN");

let BASE_URL =
  domain === "roadmap"
    ? "http://HVA-BE-LB-73ebf961d59373fc.elb.ap-southeast-1.amazonaws.com/api/admin"
    : "http://HVAS-LB-6943853ce3637d52.elb.ap-southeast-1.amazonaws.com/api/admin";
const IMG_URL = "http://hva-bucket.s3.ap-southeast-1.amazonaws.com/";
const WS_SERVER = "ws://HVA-BE-LB-73ebf961d59373fc.elb.ap-southeast-1.amazonaws.com/";
let axiosInstance = axios.create({
  baseURL: BASE_URL,
});
let authedAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

let retryCounter = 0;
const MAX_RETRY = 10;

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

authedAxiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      retryCounter < MAX_RETRY
    ) {
      retryCounter++;

      originalRequest._retry = true;

      const { data } = await refreshToken();
      localStorage.removeItem("HOCVOIAI_ADMIN_TOKEN");
      localStorage.setItem("HOCVOIAI_ADMIN_TOKEN", data.access_token);
      window.dispatchEvent(new Event("newToken"));

      // Update the Authorization header with the new token
      authedAxiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access_token}`;
      return authedAxiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

// Function to refresh the token (replace this with your actual token refresh logic)
const refreshToken = async () => {
  const data = {
    refreshToken: localStorage.getItem("HOCVOIAI_ADMIN_REFRESHTOKEN"),
  };
  return axiosInstance.post(`/auth/refresh`, data);
};

export { BASE_URL, IMG_URL, WS_SERVER, axiosInstance, authedAxiosInstance };
