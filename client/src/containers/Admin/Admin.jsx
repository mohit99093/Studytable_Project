import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CategoryIcon from "@material-ui/icons/Category";
import FileIcon from "@material-ui/icons/FileCopy";

import "./Admin.scss";
import { useEffect } from "react";
import Blog from "./Blog/Blog";

export default function Profile(props) {
  const [tab, setTab] = useState("blog");

  const handler = (e) => {
    setTab(e.target.value);
  };

  return (
    <div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'space-between'
          }}
        >
          <div style={{width:'30%'}}>
            <div className="side-nav">
              <div className="mb-4">
                <Card>
                  <CardContent>
                    <div style={{display:'flex',alignItems:'center'}}>
                      <div>
                        <Avatar className="dp" src="" />
                      </div>
                      <div style={{margin:'0 2em'}} >
                        <div>
                          Hello,<span style={{ fontSize: "19px" }}> Admin</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div style={{marginTop:'0em'}}>
                <Card style={{ boxShadow: "none" }} className="drop_ad">
                  <select onChange={handler}>
                    <optgroup label="Upload">
                      <option value="blog">Blog</option>
                    </optgroup>
                  </select>
                </Card>
                <Card className="left_ad">
                  <CardContent>
                    <List
                      component="nav"
                      aria-label="main"
                      subheader={
                        <ListSubheader
                          component="div"
                          id="nested-list-subheader"
                        >
                          Upload
                        </ListSubheader>
                      }
                    >
                      <ListItem
                        button
                        selected={tab == "blog"}
                        onClick={() => setTab("blog")}
                      >
                        <ListItemIcon>
                          <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Blogs" id="tab" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div style={{width:'65%'}}>
            <div className="content">{tab == "blog" ? <Blog /> : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
