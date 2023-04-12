import { NavLink } from "react-router-dom";

function Nav() {
  return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="hover:bg-primary btn btn-ghost normal-case text-xl">Wandrrr</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/wandrrrs/">Home</NavLink></li>
            <li><NavLink to="/new/">New Wandrrr</NavLink></li>
            <li><NavLink to="/edit/">Edit</NavLink></li>
            <li tabIndex={0}>
                <a>
                Username
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                <li><NavLink to="/signout/">Logout</NavLink></li>
                </ul>
            </li>
            </ul>
        </div>
      </div>
  );
}

export default Nav;
