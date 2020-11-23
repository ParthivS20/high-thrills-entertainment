import React from "react";
import "../styles.css";
import Title from "../Components/Title";

export default function PageNotFound() {
  try {
    document.getElementById("navUl").classList.add("navUlHide");
  } catch (e) {}
  return (
    <div className="">
      <Title title="Page Not Found" />
      <h1 className="text-center text-5xl">
        <b>404 - Page Not Found</b>
      </h1>
    </div>
  );
}
