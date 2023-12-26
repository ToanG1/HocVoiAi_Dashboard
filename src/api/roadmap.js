import { authedAxiosInstance } from ".";

function getRoadmaps(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/roadmap?page=${page}&limit=${limit}`);
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
