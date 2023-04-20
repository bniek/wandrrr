import { NavLink } from "react-router-dom";
import useToken, { AuthContext } from '@galvanize-inc/jwtdown-for-react';
import React from "react";
import { useContext } from 'react';


function Nav(props) {

  const { token } = useContext(AuthContext);
  const { logout } = useToken();

  return (
    <div className="navbar p-5 bg-base-100 relative">
      <div className="flex-1">
        <a className="hover:bg-primary btn btn-ghost normal-case text-xl">Wandrrr</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {token ? (
            <>
              <li><NavLink to="/wandrrrs/">My Wandrrrs</NavLink></li>
              <li tabIndex={0}>
                <a>
                  {props.user.username}
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="absolute right-0 p-2 bg-base-100 hover:bg-base-100 bg-white rounded-lg shadow-xl">
                  <li><NavLink to="/new/">New Wandrrr</NavLink></li>
                  <li><button onClick={logout}>Log out</button></li>
                </ul>
              </li>
            </>
          ) : (
            <React.Fragment>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup">Sign up</NavLink></li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
