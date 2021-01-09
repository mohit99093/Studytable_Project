import { Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Blog() {
  const schema = { heading: "", sub: "", link: "", desc: "" };
  const [blog, setBlog] = useState(schema);
  const handle = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  return (
    <Paper className="p-2">
      <h1 style={{ textAlign: "center" }}> Blogs </h1>
      <div
        className="mt-2"
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          width: "60%",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <TextField
          label="Heading"
          variant="outlined"
          className="m-2"
          name="heading"
          onChange={handle}
        />
        <TextField
          label="Sub-Heading"
          variant="outlined"
          className="m-2"
          name="sub"
          onChange={handle}
        />
        <TextField
          label="Image Link"
          variant="outlined"
          className="m-2"
          name="link"
          onChange={handle}
        />
        <TextField
          label="Description"
          variant="outlined"
          className="m-2"
          name="desc"
          onChange={handle}
        />
      </div>
    </Paper>
  );
}
