import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useToken, { AuthContext } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";
import NewWandrrrForm from './NewWandrrrForm';
import UpdateWandrrr from './UpdateWandrrr';
import WandrrrsList from './WandrrrsList.js';
import Nav from './Nav';



function App(props) {
  const { token } = useContext (AuthContext);
  const user = useUser(token);
    return (
      <div>
        <Nav user={user} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="new" element={<NewWandrrrForm user={user} />} />
            <Route path="edit/" element={<UpdateWandrrr />} />
            <Route path="/wandrrrs" element={<WandrrrsList />} />
          </Routes>
        </div>
      </div>
    );
}


export default App;
