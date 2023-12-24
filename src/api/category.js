import { authedAxiosInstance } from ".";

function getCategories() {
  return authedAxiosInstance.get("/category");
}
function getChartData(type) {
  return authedAxiosInstance.get(`/category/chart?type=${type}`);
}
function updateCategory(data) {
  return authedAxiosInstance.patch(`/category/${data.id}`, data);
}

function deleteCategory(id) {
  return authedAxiosInstance.delete(`/category/${id}`);
}
export { getCategories,getChartData ,updateCategory,deleteCategory};
