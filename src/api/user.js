import { authedAxiosInstance } from ".";

function getUsers(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/user?page=${page}&limit=${limit}`);
}
function getChartData(type) {
  return authedAxiosInstance.get(`/user/chart?type=${type}`);
}
function updateUsers(data) {
  return authedAxiosInstance.patch(`/user/${data.id}`, data);
}

function deleteUsers(id) {
  return authedAxiosInstance.delete(`/user/${id}`);
}
export { getUsers, getChartData, updateUsers, deleteUsers };
