import { authedAxiosInstance } from ".";

function getRoadmaps() {
  return authedAxiosInstance.get("/roadmap");
}

function getChartData(type) {
  return authedAxiosInstance.get(`/roadmap/chart?type=${type}`);
}

export { getRoadmaps, getChartData };
