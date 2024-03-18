import React from "react"
import { Link } from "react-router-dom";
function NavBar() {
  return (

    <nav  className="px-3 py-1 bg-yellow-600 font-bold text-white">
        <ul className="flex px-5 py-3 space-x-6 ">
            <li></li>
            <li className="hover:bg-yellow-500 px-1 py-2 rounded-lg hover:text-slate-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-yellow-500 px-2 py-2 rounded-lg  hover:text-slate-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
                <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-yellow-500 px-2 py-2 rounded-lg  hover:text-slate-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <Link to="/articleslist">Articles</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;
