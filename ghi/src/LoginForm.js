import useToken from "@galvanize-inc/jwtdown-for-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const { token, login } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/wandrrrs")
    }
  }, [navigate, token]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isLogIn = location.pathname.includes("login");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogIn) {
      login(formData.username, formData.password);
    }
  };

  // if (token != null) {
  //   window.location.href = "/wandrrrs";
  // }

  const { username = "", password = "" } = formData;
  return (
    <div align="center">
      <form>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleFormChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleFormChange}
            />
          </label>
        </div>
      </form>
      <br></br>
      <button className="btn btn-active btn-ghost" onClick={handleSubmit}>
        {isLogIn ? "Log in" : "Sign up"}
      </button>
    </div>
  );
}

export default Login;
