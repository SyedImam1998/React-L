import React from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectComponent = ({ component }) => {
  const [getLocalStorageValue] = useLocalStorage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (getLocalStorageValue("isLoggedIn")) {
      setIsLoggedIn(true);
    } else {
      console.log("protected route location", location);
      navigate("/login", { state: { pathname: location.pathname } });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoggedIn ? component : <div>Loading...</div>;
};

export default ProtectComponent;
