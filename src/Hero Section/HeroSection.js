import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div>
      {/* Spring banner */}
      <div className="banner">
        <Link className="to-spring-collection">
          <img
            className="banner-image"
            src="https://mediacdn.grabone.co.nz/asset/yDjZTGuDg1"
          />
        </Link>
        {/* Announcement / Light Alert */}
        <div className="announcement">
          <p>
            <span className="update">Covid 19 Update:</span> We encourage you to
            shop as normal for all your products but shipping delays may occur.
            Stay safe NZ!
          </p>
        </div>
      </div>
      {/* Sidebar (incomplete) */}
      <div className="initial-display">
        <aside className="sidebar">
          <header>Discover</header>
          <ul>
            <li>Featured Auckland Deals</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
