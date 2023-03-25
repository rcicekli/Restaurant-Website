import React, { Component } from "react";
import video from "../assets/headvideo.mp4";

export default class Head extends Component {
  render() {
    return (
      <div >
        <video
          style={{ objectFit: "cover", left: 0, top: 0 }}
          className="vh-100 w-100"
          src={video}
          autoPlay
          loop
          muted
        />
       
      </div>
    );
  }
}
