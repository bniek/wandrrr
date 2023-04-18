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
    const handleSubmit = () => {
        if (isLogIn) {
            login(formData.username, formData.password);
        } else {
            register(formData,`${process.env.REACT_APP_USER_SERVICE_API_HOST}/wandrrrs/accounts`);
        }
    };

    const { first_name = "", last_name = "", email = "", username = "", password = "" } = formData;
    return (
        <div>
            <ul>
                <li>
                    first_name{" "}
                    <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={handleFormChange}
                    />
                </li>
                <li>
                    last_name{" "}
                    <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={handleFormChange}
                    />
                </li>
                <li>
                    email{" "}
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleFormChange}
                    />
                </li>
                <li>
                    username{" "}
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleFormChange}
                    />
                </li>
                <li>
                    password{" "}
                    <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={handleFormChange}
                    />
                </li>
            </ul>
            <button onClick={handleSubmit}>{isLogIn ? "Log in" : "Sign up"}</button>
        </div>
    );
}

export default Auth;
