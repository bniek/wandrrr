import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { AuthContext } from "@galvanize-inc/jwtdown-for-react";
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";
import Login from "./LoginForm.js";
import Nav from "./Nav";
import WandrrrDetail from "./get_one";
import AccessError from "./access-error.js";
import NewWandrrrForm from "./NewWandrrrForm";
import UpdateWandrrr from "./UpdateWandrrr";
import WandrrrsList from "./WandrrrsList.js";
import LandingPage from "./LandingPage.js";

function App(props) {
  const { token } = useContext(AuthContext);
  const user = useUser(token);
  // console.log(user)
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <div>
      <BrowserRouter basename={basename}>
        <AuthProvider
          tokenUrl={`${process.env.REACT_APP_USER_SERVICE_API_HOST}/token`}
        >
          <Nav user={user} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<NewWandrrrForm user={user} />} />
            <Route path="/edit" element={<UpdateWandrrr />} />
            <Route path="/error" element={<AccessError />} />
            <Route path="/wandrrrs" element={<WandrrrsList />} />
            <Route path="/wandrrrs/:wandrrrs_id" element={<WandrrrDetail />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
