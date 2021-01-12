import React, { useEffect, useState } from "react";
import "./Detail.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Detail(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/api/blogs?id=${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="nav1">
        <a href="/">
          STUDY<span>table </span>
        </a>
      </div>
      <div className="det">
        <h4>{data.heading}</h4>
        <div className="blog">
          <div className="left">
            <img src={data.link} />
            <h5> {data.sub} </h5>
            <p>{data.desc}</p>
          </div>
          <div className="right">
            <h5>Recent Articles</h5>
            <div className="list">
              <div className="card1">
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
              <div className="card1">
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
              <div className="card1">
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
              <div className="card1">
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
