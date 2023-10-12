import Cookies from "js-cookie";

const useUpdate = async (firstname, lastname, email, phonenumber, password) => {
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");
  if (!token) {
    throw new Error("User token not found");
  }
  const apiUrl = "http://localhost:3001/api/users/" + userId;
  const requestBody = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phonenumber: phonenumber,
  };

  if (password) {
    requestBody.password = password;
  }

  try {
    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      credentials: "include",
    });
    console.log("User profile updated");
  } catch (error) {
    throw new Error(`Error updating user profile: ${error.message}`);
  }
};

export default useUpdate;
