import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./styles.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Planner from "./Pages/Planner";
import Profile from "./Pages/Profile";
import RestaurantReservation from "./Pages/RestaurantReservation";
import RideReservation from "./Pages/RideReservation";
import Dashboard from "./Pages/Dashboard";
import Admin from "./Pages/Admin";
import Weather from "./Pages/Weather";
import Reviews from "./Pages/Reviews";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/planner" component={Planner} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/restaurant-reservation"
            component={RestaurantReservation}
          />
          <Route exact path="/ride-reservation" component={RideReservation} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/reviews" component={Reviews} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
