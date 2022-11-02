import axios from "axios";
const API_URL = "https://dev-be.trijagabaya.co.id/api";

export const login = async (adminpetugasusername, password) => {
  try {
    const res = await axios.post(
      `${API_URL}/login`,
      { adminpetugasusername, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      localStorage.getItem("user", JSON.stringify(res.data));
      return res;
    }
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
