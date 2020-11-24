import React from "react";
import "../styles.css";
import Title from "../Components/Title";
import logo from "./logo.svg";
import "./App.css";
import ReviewTestimonials from "./ReviewTestimonials.js";

export default function Reviews() {
  try {
    document.getElementById("navUl").classList.add("navUlHide");
  } catch (e) {}
  return (
    <div className="">
      <Title title="Reviews" />
      <ReviewTestimonials />
    </div>
  );
}
