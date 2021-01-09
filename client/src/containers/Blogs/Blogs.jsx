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
        <p> The Sub Heading </p>
        <div className="contain">
          {blog.length>0
            ? blog.map((item) => (
                <div className="card">
                  <img src={item.link} />
                  <h3> {item.heading} </h3>
                  <p>
                    {item.desc?item.desc.substring(0,400):null}...
                    <span>
                      <a href="/blogs/detail">Read More</a>
                    </span>
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
