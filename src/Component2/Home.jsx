import React from "react";
import "./Home.css";
import TodoList from "../Redux/TodoList";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="banner">
          <h1>Welcome to Your Company</h1>
          <p>Your success is our priority</p>
        </div>
        <div className="content">
          <h2>About Us</h2>
          <p>
            Transforming Ideas Into Reality
            <h1>IT companies in Surat</h1>
            We are known for our reliability, quality, speed, and invincible ROI
            as one of the leading IT companies in Surat. We help organizations
            enrich their customer experiences, improvise their operations,
            launch new platforms, and monetize data opportunities. We offer
            end-to-end strategy, tools, and technical talent on a single
            platform to deliver mission-critical technology initiatives.
          </p>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services to meet your needs. From
            consulting to implementation, we have you covered.
          </p>
        </div>
      </div>
      <TodoList />
    </>
  );
}
