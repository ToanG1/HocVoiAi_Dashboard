import { authedAxiosInstance } from ".";

function getCategories(currentPage = 1, limit = 10) {
  return authedAxiosInstance.get(
    `/category?page=${currentPage}&limit=${limit}`
  );
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
function createCategory(data) {
  return authedAxiosInstance.post(`/category`, data);
}
export {
  getCategories,
  getChartData,
  updateCategory,
  deleteCategory,
  createCategory,
};
