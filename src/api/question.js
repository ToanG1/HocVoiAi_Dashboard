import { authedAxiosInstance } from ".";

function getQuestions(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/question?page=${page}&limit=${limit}`);
}
function getChartData(type) {
  return authedAxiosInstance.get(`/question/chart?type=${type}`);
}
function updateQuestion(data) {
  return authedAxiosInstance.patch(`/question/${data.id}`, data);
}

function deleteQuestion(id) {
  return authedAxiosInstance.delete(`/question/${id}`);
}
export { getQuestions, getChartData, updateQuestion, deleteQuestion };
