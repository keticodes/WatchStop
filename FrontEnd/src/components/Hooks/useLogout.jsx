import Cookies from "js-cookie";
const useLogout = () => {
  Cookies.remove("token");
  Cookies.remove("userId");
  console.log("Logout successful");
};
export default useLogout;
