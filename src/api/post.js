import { authedAxiosInstance } from ".";

async function getPostData(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/post?page=${page}&limit=${limit}`);
}

async function getPostChartData(type) {
  return authedAxiosInstance.get(`/post?type=${type}`);
}

export { getPostData, getPostChartData };
