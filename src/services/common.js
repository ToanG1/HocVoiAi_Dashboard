import { checkAdmin } from "../api/auth";
import moment from "moment/moment";

function checkAuthenticationInApp() {
  if (localStorage.getItem("HOCVOIAI_ADMIN_TOKEN"))
    checkAdmin()
      .then((res) => {
        if (res.code !== 200 || !res.data) {
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        if (err instanceof TypeError) window.location.href = "/login";
        if (err.response.status !== 401) window.location.href = "/login";
      });
  else window.location.href = "/login";
}

function renderFormatedDateTime(time) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
}

function renderFormatedDate(time) {
  return moment(time).format("YYYY-MM-DD");
}

export { checkAuthenticationInApp, renderFormatedDateTime, renderFormatedDate };
