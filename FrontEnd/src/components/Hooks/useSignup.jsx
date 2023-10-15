import Cookies from "js-cookie";

const useSignup = async (userData) => {
  const apiUrl = "https://watchstio.onrender.com/api/users";
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
      console.log("Signup successful");
      return true;
    } else {
      console.error("Signup failed");
      return false;
    }
  } catch (error) {
    console.error("An error occurred during signup:", error);
    return false;
  }
};

export default useSignup;
