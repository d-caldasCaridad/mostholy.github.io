import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      const response = await axios.post('/logout', {
        withCredentials: true
      });
      setAuth({});
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return logout;
}

export default useLogout;
