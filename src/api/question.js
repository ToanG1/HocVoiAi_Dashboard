import { authedAxiosInstance } from ".";

function getQuestions() {
  return authedAxiosInstance.get("/question");
}
function getChartData(type) {
  return authedAxiosInstance.get(`/question/chart?type=${type}`);
}


export { getQuestions ,getChartData};
