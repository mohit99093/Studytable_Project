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
  return (
    <React.Fragment>
      <div className="blogs">
        <a href="/" className="logo">
          STUDY<span>table</span>
        </a>
        <h1>Blogs</h1>
        <div className="contain">
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              It is a moment of honour for me to be associated as the Head of
              Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a
              platform for discovering and amplifying your interest in the world
              of ent
            </p>
            <a href="/blogs/detail">
              <Button className="butns"> Read More </Button>
            </a>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              It is a moment of honour for me to be associated as the Head of
              Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a
              platform for discovering and amplifying your interest in the world
              of ent
            </p>
            <a href="/blogs/detail">
              <Button className="butns"> Read More </Button>
            </a>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              It is a moment of honour for me to be associated as the Head of
              Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a
              platform for discovering and amplifying your interest in the world
              of ent
            </p>
            <a href="/blogs/detail">
              <Button className="butns"> Read More </Button>
            </a>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              It is a moment of honour for me to be associated as the Head of
              Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a
              platform for discovering and amplifying your interest in the world
              of ent
            </p>
            <a href="/blogs/detail">
              <Button className="butns"> Read More </Button>
            </a>
          </div>
          <div className="card">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h3> Heading </h3>
            <p>
              It is a moment of honour for me to be associated as the Head of
              Advisory Committee of Entrepreneurship Cell, NITH. E-Cell is a
              platform for discovering and amplifying your interest in the world
              of ent
            </p>
            <a href="/blogs/detail">
              <Button className="butns"> Read More </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
