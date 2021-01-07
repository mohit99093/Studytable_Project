import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Footer from "../Footer/Footer";
import { Button } from "@material-ui/core";

export default function Blogs() {
  const [blog, setBlog] = useState([{}]);
  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((res) => {
        setBlog(res);
      });
  }, []);
  let s = "It is a moment of honour for me to be associated as the Head of Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a platform for discovering and amplifying your interest in the world              of entry Committee of Entrepreneurship Cell, NITH. E-Cell is a              platfory Committee of Entrepreneurship Cell, NITH. E-Cell is a             platform for discovering and amplifying your interest in the world"
          
  const string = (str) => {
    let s = str.substr(0, 450);
    return s;
  };
  return (
    <React.Fragment>
      <div className="blogs">
        <a href="/" className="logo">
          STUDY<span>table</span>
        </a>
        <h1>Blogs</h1>
        <p> The Sub Heading </p>
        <div className="contain">
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              {string(s)}...
              <span>
                <a href="/blogs/detail">Read More</a>
              </span>
            </p>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              {string(s)}...
              <span>
                <a href="/blogs/detail">Read More</a>
              </span>
            </p>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              {string(s)}...
              <span>
                <a href="/blogs/detail">Read More</a>
              </span>
            </p>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              {string(s)}...
              <span>
                <a href="/blogs/detail">Read More</a>
              </span>
            </p>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              {string(s)}...
              <span>
                <a href="/blogs/detail">Read More</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
