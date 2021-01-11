import { Paper, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

export default function Blog() {
  const schema = { heading: "", sub: "", link: "", desc: "" };
  const [blog, setBlog] = useState(schema);
  const handle = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const [status, setStatus] = useState({});
  const postBlog = (e) => {
    e.preventDefault();
    return fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((res) => {
        setStatus(res);
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      });
  };

  return (
    <Paper>
      <h1 style={{ textAlign: "center" }}> Blogs </h1>
      <form
        className="mt-2"
        onSubmit={postBlog}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <TextField
          label="Heading"
          variant="outlined"
          style={{margin:'1em 0'}}
          name="heading"
          onChange={handle}
        />
        <TextField
          label="Sub-Heading"
          variant="outlined"
          style={{margin:'1em 0'}}
          name="sub"
          onChange={handle}
        />
        <TextField
          label="Image Link"
          variant="outlined"
          style={{margin:'1em 0'}}
          name="link"
          onChange={handle}
        />
        <TextField
          label="Description"
          variant="outlined"
          style={{margin:'1em 0'}}
          name="desc"
          onChange={handle}
        />
        <Button
          type="submit"
          style={{ color: "white", backgroundColor: "skyblue",padding:'0.75em',margin:'1em 0' }}
        >
          Submit
        </Button>
      </form>
      <div className="status">
        <p className={status.status === 201 ? "green" : "red"}>
          {status.message}
        </p>
      </div>
    </Paper>
  );
}
