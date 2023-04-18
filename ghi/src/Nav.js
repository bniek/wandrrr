import { NavLink } from "react-router-dom";
import useToken, { AuthContext, AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import Auth from "./Auth.js";
import { useContext } from 'react';
import useUser from "./useUser";


function Nav() {

  const { token } = useContext (AuthContext);
  const user = useUser(token);
  const { logout } = useToken();
  return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="hover:bg-primary btn btn-ghost normal-case text-xl">Wandrrr</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/wandrrrs/">Home</NavLink></li>
            {token ? (

            <li tabIndex={0}>
                <a>
                Username
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                <li><NavLink to="/new/">New Wandrrr</NavLink></li>
                <li><button onClick={logout}>Log out</button></li>
                </ul>
            </li>
            ) : (
            <>
            <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup">Sign up</NavLink></li>
            </>
          )}
            </ul>
        </div>
      </div>
  );
}

export default Nav;
