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

        } else {
            register(formData,`${process.env.REACT_APP_WANDRRR_API_HOST}/wandrrrs/accounts`);
        }
    };

    const { username = "", password = "" } = formData;
    return token ? null : (
        <div>
            <ul>
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
