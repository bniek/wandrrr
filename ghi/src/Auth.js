import useToken from "@galvanize-inc/jwtdown-for-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { token, register, login } = useToken();

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
            window.location.href = "/test";
        } else {
            register(formData,`${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/accounts`)
        }

    };
    if (token != null){
        window.location.href = "/new";
    }

    const { first_name = "", last_name = "", email = "", username = "", password = "" } = formData;
    return (
        <div align="center">
            <form><div>
                    <label> First Name:
                    <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={handleFormChange}
                    /></label>
                </div>
                <div>
                    <label>Last Name:
                    <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={handleFormChange}
                    /></label>
                </div>
                <div>
                    <label>Email:
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleFormChange}
                    /></label>
                    </div>
                    <div>
                    <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleFormChange}
                    /></label>
                </div>
                <div>
                    <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleFormChange}
                    /></label>
                </div>
            </form>
            <br></br>
            <button className="btn btn-active btn-ghost" onClick={handleSubmit}>{isLogIn ? "Log in" : "Sign up"}</button>

        </div>
    );
}

export default Auth;
