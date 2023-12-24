import { authedAxiosInstance } from ".";

function getUsers() {
  return authedAxiosInstance.get("/user");
}
function getChartData(type) {
  return authedAxiosInstance.get(`/user/chart?type=${type}`);
}
export { getUsers, getChartData };
