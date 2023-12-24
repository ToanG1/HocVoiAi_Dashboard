import { authedAxiosInstance } from ".";

function getCategories() {
  return authedAxiosInstance.get("/category");
}
function getChartData(type) {
  return authedAxiosInstance.get(`/category/chart?type=${type}`);
}
export { getCategories,getChartData };
