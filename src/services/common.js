import { checkAdmin } from "../api/auth";

function checkAuthenticationInApp() {
  if (localStorage.getItem("HOCVOIAI_TOKEN"))
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

export { checkAuthenticationInApp };
