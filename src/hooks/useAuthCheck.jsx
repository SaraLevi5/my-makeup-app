import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import loginContext from "../context/login.context";

const useAuthCheck = () => {
  const { setLogin } = useContext(loginContext);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthChecked(true);
      return;
    }

    let userDetails = jwtDecode(token);
    if (!userDetails || !userDetails._id) {
      setIsAuthChecked(true);
      return;
    }

    if (!userDetails || !userDetails.id) {
      setIsAuthChecked(true);
      return;
    }

    axios
      .get(`/users/login${userDetails.id}`)
      .then(({ data }) => {
        setLogin(userDetails);
        setIsAuthChecked(true);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setIsAuthChecked(true);
      });
  }, [setLogin]);

  return isAuthChecked;
};

export default useAuthCheck;
