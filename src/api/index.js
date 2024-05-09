import axios from "axios";

let BASE_URL = "http://localhost:5001/api/admin";
const IMG_URL = "http://localhost:9000";
const WS_SERVER = "ws://localhost:5001/";
let axiosInstance;
let authedAxiosInstance;

let retryCounter = 0;
const MAX_RETRY = 10;

function changeDomain(domain) {
  if (domain === "roadmap") {
    BASE_URL = "http://localhost:5001/api/admin";
  } else {
    BASE_URL = "http://localhost:5003/api/admin";
  }
  axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  axiosInstance.interceptors.response.use((response) => {
    return response.data;
  });
}

function handleAuthedInstance() {
  authedAxiosInstance = axios.create({
    baseURL: BASE_URL,
  });
  document.addEventListener("newToken", () => {
    authedAxiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("HOCVOIAI_ADMIN_TOKEN")}`;
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
}

// Function to refresh the token (replace this with your actual token refresh logic)
const refreshToken = async () => {
  const data = {
    refreshToken: localStorage.getItem("HOCVOIAI_ADMIN_REFRESHTOKEN"),
  };
  return axiosInstance.post(`/auth/refresh`, data);
};

export {
  BASE_URL,
  IMG_URL,
  WS_SERVER,
  axiosInstance,
  authedAxiosInstance,
  changeDomain,
  handleAuthedInstance,
};
