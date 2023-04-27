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

  const { username = "", password = "" } = formData;

  return (
    <div className="contain">
      <div
      className="mx-auto py-20">
        <form
        className="bg-[#AFDAFE] g-gray-100 rounded-lg shadow-lg max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
        id="create-login-form"
        >
          <div className="form-floating mb-3 py-20">
            <h1
            className="text-6xl text-[#FFFFFF] text-center"
            style={{ fontFamily: 'Instrument Serif' }}>
              Log In!
            </h1>
          </div>
          <div className="form-floating mb-3">
            <label className="py-2 text-[#FFFFFF]" htmlFor="username">Username</label>
            <input
            onChange={handleFormChange}
            placeholder="Username"
            required
            type="text"
            name="username"
            id="username"
            value={username}
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </div>
          <div className="form-floating mb-3">
            <label className="py-2 text-[#FFFFFF]" htmlFor="password">Password</label>
            <input
            onChange={handleFormChange}
            placeholder="Password"
            required
            type="password"
            name="password"
            id="password"
            value={password}
            className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </div>
           <button
           className="mt-4 w-full bg-[#AFDAFE] hover:text-[#AFDAFE] hover:bg-[#FFFFFF] text-[#FFFFFF] rounded-lg border-2 border-[#FFFFFF] py-3 px-6 font-semibold text-md rounded"
           type="submit" style={{ fontFamily: 'Instrument Serif' }}
           >
            {isLogIn ? "Log in" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
