import { authedAxiosInstance } from ".";

function getPostData(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/post?page=${page}&limit=${limit}`);
}

function getPostChartData(type) {
  return authedAxiosInstance.get(`/post/chart?type=${type}`);
}

function updatePost(data) {
  return authedAxiosInstance.patch(`/post/${data.id}`, data);
}

function deletePost(id) {
  return authedAxiosInstance.delete(`/post/${id}`);
}

export { getPostData, getPostChartData, updatePost, deletePost };
