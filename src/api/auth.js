import { authedAxiosInstance, axiosInstance } from ".";

async function handleLocalStorage(res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("HOCVOIAI_ADMIN_TOKEN");
      localStorage.removeItem("HOCVOIAI_ADMIN_REFRESHTOKEN");
      localStorage.removeItem("USER_ADMIN_INFO");

      localStorage.setItem("HOCVOIAI_ADMIN_TOKEN", res.data.access_token);
      localStorage.setItem(
        "HOCVOIAI_ADMIN_REFRESHTOKEN",
        res.data.refersh_token
      );
      localStorage.setItem(
        "USER_ADMIN_INFO",
        JSON.stringify(res.data.USER_ADMIN_INFO)
      );
      window.dispatchEvent(new Event("newToken"));

      resolve();
    }, 100);
  });
}

async function handleRemoveLocalStorage(res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("HOCVOIAI_ADMIN_TOKEN");
      localStorage.removeItem("HOCVOIAI_ADMIN_REFRESHTOKEN");
      localStorage.removeItem("USER_ADMIN_INFO");
      resolve();
    }, 100);
  });
}

async function login(email, password) {
  const res = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  if (res.code === 200)
    return handleLocalStorage(res).then(() => {
      return true;
    });
  else return false;
}

async function logout() {
  try {
    return handleRemoveLocalStorage().then(() => {
      return authedAxiosInstance.get(`/auth/logout`);
    });
  } catch (err) {
    console.log(err);
  }
}

function checkAdmin() {
  return authedAxiosInstance.get(`/auth/check-admin`);
}

export { login, logout, checkAdmin };
