import Nav from './Nav';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";



import { useContext } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import useToken, { AuthContext, AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import "./App.css";
import useUser from "./useUser";

function App() {
  // other stuff, here

  return (
    <AuthProvider>
      {/* All of your other components, here */}
    </AuthProvider>
  );
}


export default App;
