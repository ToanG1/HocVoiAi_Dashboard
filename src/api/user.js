import { authedAxiosInstance } from ".";

function getUsers() {
  return authedAxiosInstance.get("/user");
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
export { getUsers, getChartData,updateUsers,deleteUsers };
