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
      return res;
    }
  } catch (error) {
    return false;
  }
};
