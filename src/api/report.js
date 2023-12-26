import { authedAxiosInstance } from ".";

function getReports(page = 1, limit = 10) {
  return authedAxiosInstance.get(`/report?page=${page}&limit=${limit}`);
}

function getChartData(type) {
  return authedAxiosInstance.get(`/report/chart?type=${type}`);
}

export { getReports, getChartData };
