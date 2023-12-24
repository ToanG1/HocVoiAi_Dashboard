import { authedAxiosInstance } from ".";

function getQuestions() {
  return authedAxiosInstance.get("/question");
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
export { getQuestions ,getChartData,updateQuestion,deleteQuestion};
