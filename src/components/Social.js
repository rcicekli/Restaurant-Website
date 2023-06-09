import React, { Component } from "react";
import { Label, Row } from "reactstrap";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

export default class Social extends Component {
  render() {
    return (
      <div
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",

          left: 0,
          top: 0,
        }}
        className=" w-100 "
      >
        <div className="container">
          <Row>
            <Label
              style={{ fontFamily: "Oswald" }}
              className="fs-2 fw-bold text-uppercase mb-5 mt-5"
            >
              Yolculuğumuzu Takip Edin <a className="takip text-lowercase" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCc_aQ56OI4B-sjb4GbWBjQA?app=desktop"><u>@food</u></a>
            </Label>
          </Row>
          <Row >
            <MDBRow>
              <MDBCol lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                <img
                  src="https://picsum.photos/200/200"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />

                <img
                  src="https://picsum.photos/200/400"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
                <img
                  src="https://picsum.photos/200/200"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </MDBCol>

              <MDBCol lg={4} sm={12} className="mb-4 mb-lg-0">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />

                <img
                  src="https://picsum.photos/200/350"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <img
                  src="https://picsum.photos/200/150"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </MDBCol>

              <MDBCol lg={4} sm={12} className="mb-4 mb-lg-0">
                <img
                  src="https://picsum.photos/200/200"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />

                <img
                  src="https://picsum.photos/200/300"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
                <img
                  src="https://picsum.photos/200/300"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </MDBCol>
            </MDBRow>
          </Row>
        </div>
      </div>
    );
  }
}
