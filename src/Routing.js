import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import SignIn from "./components/screens/sign_in/sign_in";
import Login from "./components/screens/login/login";
import Home from "./components/screens/home/home";
import Dashboard from "./components/screens/dashboard/dashboard";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
