import { authedAxiosInstance } from ".";

function getCategories() {
  return authedAxiosInstance.get("/category");
}

export { getCategories };
