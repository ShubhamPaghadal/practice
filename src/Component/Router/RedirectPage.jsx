import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Registation from "../Registation/Registation";
import Home from "../../Component2/Home";
import Protected from "./Protected";
import Layout from "../../Component2/Layout";
import About from "../../Component2/About";
import Contact from "../../Component2/Contact";

function RedirectPage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/about" element={<Protected Component={About} />} />
            <Route
              path="/contact"
              element={<Protected Component={Contact} />}
            />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="register" element={<Registation />} />
        </Routes>
      </Router>
    </>
  );
}

export default RedirectPage;
