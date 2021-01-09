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
    <div className="container page admin">
      <div className="container main-container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="side-nav">
              <div className="mb-4">
                <Card>
                  <CardContent>
                    <div className="row align-items-center">
                      <div className="col-4">
                        <Avatar className="dp" src="" />
                      </div>
                      <div className="col">
                        <div>
                          Hello,<span style={{ fontSize: "19px" }}> Admin</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-3">
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
          <div className="col-md-8">
            <div className="content">{tab == "blog" ? <Blog /> : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
