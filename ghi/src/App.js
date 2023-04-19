import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useToken, { AuthContext } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";
import Login from './LoginForm.js';
import Nav from './Nav';
import WandrrrDetail from './get_one';



function App(props) {
  const { token } = useContext (AuthContext);
  const user = useUser(token);
  console.log(user)
    return (
      <div>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Login />} />

            <Route path="/wandrrrs/:wandrrrs_id" element={<WandrrrDetail />} />
          </Routes>
        </div>
      </div>
    );
}


export default App;
