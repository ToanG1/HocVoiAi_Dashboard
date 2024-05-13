import { authedAxiosInstance } from ".";

function getUserData(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/user?page=${page}&limit=${limit}`);
}

function getUserChartData(type) {
  return authedAxiosInstance.get(`/user/chart?type=${type}`);
}

function createUser(data) {
  return authedAxiosInstance.post(`/user`, data);
}

function updateUser(data) {
  return authedAxiosInstance.patch(`/user/${data.id}`, data);
}

function deleteUser(id) {
  return authedAxiosInstance.delete(`/user/${id}`);
}

export { getUserData, getUserChartData, createUser, updateUser, deleteUser };
