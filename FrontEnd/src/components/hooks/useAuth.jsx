import Cookies from "js-cookie";
const useAuth = () => {
  if (Cookies.get("token")) {
    return true;
  } else {
    return false;
  }
};
export default useAuth;
