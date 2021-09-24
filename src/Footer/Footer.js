import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* The four columns */}
      <div className="FirstFooter">
        <div className="Columns">
          <div className="FollowUs">
            <div className="SocialMedia">
              <h4>Follow us on</h4>
              <ul className="icons">
                <li>
                  <Link><FaFacebook></FaFacebook></Link>
                </li>
                <li>
                  <Link><AiFillTwitterCircle></AiFillTwitterCircle></Link>
                </li>
                <li>
                  <Link><ImInstagram></ImInstagram></Link>
                </li>
                <li>
                  <Link><FaYoutube></FaYoutube></Link>
                </li>
              </ul>
            </div>
            <div className="DownloadApp">
              <h4>Get app exclusive deals</h4>
              {/* Add a phone icon to the download button */}
              <Link to="#">
                <Button className="btn">Download our App</Button>
              </Link>
            </div>
          </div>
          <div className="GrabOne">
            <h4>GrabOne</h4>
            <ul>
              <li>
                <Link>GrabOne Guarantee</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Terms & Returns</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Gift Cards</Link>
              </li>
            </ul>
          </div>
          <div className="MyAccount">
            <h4>My Account</h4>
            <ul>
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                <Link>My Cart</Link>
              </li>
              <li>
                <Link>My Coupons</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="Merchants">
            <h4>Merchants</h4>
            <ul>
              <li>
                <Link>Run a Deal</Link>
              </li>
              <li>
                <Link>Merchant Centre</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter should be above the four columns in responsive mode
        It also must appear at the left of the columns in desktop mode */}
        <div className="Newsletter">
          <h4>Newsletter Signup</h4>
          <p>
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you.
          </p>
          {/* Look for an email icon */}
          <div className="subscription-form">
            <div><HiOutlineMail></HiOutlineMail></div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter email address"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
      {/* Copyright div */}
      <div id="copyright">
        <Link to="#">Privacy Policy</Link>
        <p>&copy; 2021 GrabOne Limited</p>
        <img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" />
      </div>
    </footer>
  );
}
