import Cookies from "js-cookie";

const useLogin = async (userData) => {
  const apiUrl = "https://watchstio.onrender.com/api/users/login";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const result = await response.json();
      Cookies.set("token", result.token, { expires: 1 / 24 });
      Cookies.set("userId", result.user_id, { expires: 1 / 24 });
      console.log("Login successful");
      return true;
    } else {
      console.error("Invalid credentials");
      return false;
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
    return false;
  }
};

export default useLogin;
