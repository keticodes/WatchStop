import Cookies from "js-cookie";

const useProfile = async () => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("User token not found");
  }
  const apiUrl = "https://watchstio.onrender.com/api/users/profile";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error(`Error fetching user profile: ${error.message}`);
  }
};

export default useProfile;
