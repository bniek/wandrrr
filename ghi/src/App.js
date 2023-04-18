
// import { useEffect, useState } from "react";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
// import "./App.css";

// function App() {
//   const [launchInfo, setLaunchInfo] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
//       console.log("fastapi url: ", url);
//       let response = await fetch(url);
//       console.log("------- hello? -------");
//       let data = await response.json();

//       if (response.ok) {
//         console.log("got launch data!");
//         setLaunchInfo(data.launch_details);
//       } else {
//         console.log("drat! something happened");
//         setError(data.message);
//       }
//     }
//     getData();
//   }, []);

//   return (
//     <div>
//       <ErrorNotification error={error} />
//       <Construct info={launchInfo} />
//     </div>
//   );
// }

// export default App;




import { useContext } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import useToken, { AuthContext, AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";

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
        </Routes>
      </div>

    );
}



//   function App() {
//     return (
//       <BrowserRouter>
//         <Nav />
//       </BrowserRouter>
//     );
//   }

// export default App;
