import useLocalStorage from "../custom-hooks/useLocalStorage";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [, setValue] = useLocalStorage();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login navigate value", navigate);
  console.log("login location value", location);

  const onSubmit = () => {
    let checkWhereWasUserBefore = location.state?.pathname || "/";
    setValue("isLoggedIn", true);
    navigate(checkWhereWasUserBefore, { replace: true });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username:</label>
        <input type="text"></input>
        <br></br>
        <label>Password:</label>
        <input type="text"></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
