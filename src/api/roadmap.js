import { authedAxiosInstance } from ".";

function getRoadmaps() {
  return authedAxiosInstance.get("/roadmap");
}

function getChartData(type) {
  return authedAxiosInstance.get(`/roadmap/chart?type=${type}`);
}

function updateRoadmap(data) {
  return authedAxiosInstance.patch(`/roadmap/${data.id}`, data);
}

function deleteRoadmap(id) {
  return authedAxiosInstance.delete(`/roadmap/${id}`);
}

export { getRoadmaps, getChartData, updateRoadmap, deleteRoadmap };
