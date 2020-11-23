import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
import "./navbar.css";

export default function NavBar(props) {
  try {
    document.getElementById("navUl").classList.add("navUlHide");
  } catch (e) {}
  const navBtnClass =
    "navBTN h-10 w-auto mr-12 ml-5 transition duration-500 hover:text-gray-100 bg-transparent";
  return (
    <nav className="w-full fixed top-0 z-10">
      <button
        className="openNavButton transition duration-300 hover:text-gray-100"
        id="btn"
        onClick={() => {
          document.getElementById("navUl").classList.toggle("navUlHide");
        }}
      >
        ☰
      </button>
      <ul className="navUl navUlHide" id="navUl">
        <li className="navLi">
          <NavLink to="/" className="NavLink">
            <button className={navBtnClass}>Home</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/planner" className="NavLink">
            <button className={navBtnClass}>Itinerary Planner</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/dashboard" className="NavLink">
            <button className={navBtnClass}>Dashboard</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/weather" className="NavLink">
            <button className={navBtnClass}>Weather</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/reviews" className="NavLink">
            <button className={navBtnClass}>Reviews</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/profile" className="NavLink">
            <button className={navBtnClass}>Profile</button>
          </NavLink>
        </li>

        <li className="navLi">
          <NavLink to="/login" className="NavLink">
            <button className={navBtnClass}>Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
