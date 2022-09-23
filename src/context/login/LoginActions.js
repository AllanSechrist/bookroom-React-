import axiosInstance from "../../api/axiosAuth";

const LOGIN_URL = "/login/";
const LOGOUT_URL = "/logout/";


export const getToken = async (username, email, password) => {

  await axiosInstance
    .post(LOGIN_URL, {
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      const token = res.data.key;
      localStorage.setItem("access_token", token);
      axiosInstance.defaults.headers["Authorization"] =
        "Token " + localStorage.getItem("access_token");
    });
};

export const logout = () => {
  localStorage.removeItem("access_token");
  axiosInstance.post(LOGOUT_URL);
};
