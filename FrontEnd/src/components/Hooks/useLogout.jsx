import Cookies from "js-cookie";
const useLogout = () => {
  Cookies.remove("token");
  console.log("Logout successful");
};
export default useLogout;
