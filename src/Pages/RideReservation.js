import React from "react";
import "../styles.css";
import Title from "../Components/Title";

export default function RideReservations() {
  try {
    document.getElementById("navUl").classList.add("navUlHide");
  } catch (e) {}
  return (
    <div className="">
      <Title title="Ride Reservation" />
    </div>
  );
}
