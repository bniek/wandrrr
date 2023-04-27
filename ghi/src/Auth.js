import useToken from "@galvanize-inc/jwtdown-for-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const { token, register, login } = useToken();
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
    } else {
      register(
        formData,
        `${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/accounts`
      );
    }

  };


  const {
    first_name = "",
    last_name = "",
    email = "",
    username = "",
    password = "",
  } = formData;
  return (
    <div className="mb-10">
      <div className="mx-auto py-15"></div>
      <form
        className="bg-[#AFDAFE] g-gray-100 rounded-lg shadow-lg max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
        id="signup-form"
      >
        <div className="form-floating mb-3 py-20">
          <h1
            className="text-6xl text-[#FFFFFF] text-center"
            style={{ fontFamily: 'Instrument Serif' }}>
              Sign up!
          </h1>
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="first_name">
            {" "}
            First Name
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleFormChange}
              className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </label >
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="last_name">
            Last Name
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleFormChange}
              className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </label>
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleFormChange}
              className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </label>
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleFormChange}
              className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </label>
        </div>
        <div className="form-floating mb-3">
          <label className="py-2 text-[#FFFFFF]" htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleFormChange}
              className="bg-[#FFFFFF] border-solid border-[#FFFFFF] border py-2 px-4 w-full rounded text-gray-700"
            />
          </label>
        </div>
        <div className="py-5">
          <button
           className="mt-4 w-full bg-[#AFDAFE] hover:text-[#AFDAFE] hover:bg-[#FFFFFF] text-[#FFFFFF] rounded-lg border-2 border-[#FFFFFF] py-3 px-6 font-semibold text-md rounded"
           type="submit" style={{ fontFamily: 'Instrument Serif' }}
          >
            {isLogIn ? "Log in" : "Sign up"}
          </button>
        </div>
        </form>
      </div>
  );
}

export default Auth;
