import { authedAxiosInstance } from ".";

function getQuestions() {
  return authedAxiosInstance.get("/question");
}

export { getQuestions };
