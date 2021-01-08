import React from "react";
import "./Detail.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Detail() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="nav1">
        <a href="/">
          STUDY<span>table </span>
        </a>
      </div>
      <div className="det">
        <h4>Heading</h4>
        <div className="blog">
          <div className="left">
            <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
            <h5> Little things to make a difference </h5>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsumsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          <div className="right">
            <h5>Recent Articles</h5>
            <div className="list">
              <div className="card">
                <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
                <div className="rig">
                  <h4> Heading </h4>
                  <h6> Little things to make a difference </h6>
                  <div>
                    <AccountCircleIcon />
                    <span> Aman Prateek </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
                <div className="rig">
                  <h4> Heading </h4>
                  <h6> Little things to make a difference </h6>
                  <div>
                    <AccountCircleIcon />
                    <span> Aman Prateek </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
                <div className="rig">
                  <h4> Heading </h4>
                  <h6> Little things to make a difference </h6>
                  <div>
                    <AccountCircleIcon />
                    <span> Aman Prateek </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg" />
                <div className="rig">
                  <h4> Heading </h4>
                  <h6> Little things to make a difference </h6>
                  <div>
                    <AccountCircleIcon />
                    <span> Aman Prateek </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
