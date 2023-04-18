// import Nav from './Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WandrrrDetail from './get_one';





  // function App() {
  //   return (
  //     <BrowserRouter>
  //       {/* <Nav /> */}
  //       <div className="container">
  //       <Routes>
  //         {/* <Route path="new" element={<WandrrrForm />} /> */}
  //         <Route path="/wandrrrs/:wandrrrs_id" element={<WandrrrDetail />} />

  //       </Routes>
  //       </div>
  //     </BrowserRouter>
  //   );




import { useContext } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import useToken, { AuthContext, AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";
import WandrrrDetail from './get_one';

function App() {
  const { token } = useContext (AuthContext);
  const user = useUser(token);
  const { logout } = useToken();
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
            margin: "auto",
          }}
        >
          <NavLink to="/create-wandrrr">new wandrrr</NavLink>
          <NavLink to="my-wandrrrs/">my  wandrrrs</NavLink>
          {token ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <NavLink to="/login">login</NavLink>
              <NavLink to="/signup">sign up</NavLink>
            </>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/wandrrrs/:wandrrrs_id" element={<WandrrrDetail />} />
        </Routes>
      </div>

    );
}

export default App;
