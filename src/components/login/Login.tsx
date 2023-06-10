import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./Login.scss";

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [cookies, setCookie] = useCookies(["LAVERDABOOM-AUTH"]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  const login = async () => {
    try {
      await axios
        .post(
          `http://localhost:8080/login`,
          {
            username: username,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        )
        .then((response) => {
          setCookie("LAVERDABOOM-AUTH", response.data.sessionToken, {
            path: "/",
          });
          setIsLoggedIn(true);
          sessionStorage.setItem("laverdaboom-auth", "loggedIn");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h3>Logga in</h3>
        <div className="login-form">
          <div className="login-form-input">
            <label>Användarnamn:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form-input">
            <label>Lösenord:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" onClick={login}>
            Logga in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
