import { authedAxiosInstance } from ".";

function getUsers() {
  return authedAxiosInstance.get("/user");
}

export { getUsers };
