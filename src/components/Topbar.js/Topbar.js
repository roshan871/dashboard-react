import React from "react";
import "./Topbar.css";
import {NotificationsNone, Language , Settings} from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DahalAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
             <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
             <Language /> 
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
           <Settings /> 
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}