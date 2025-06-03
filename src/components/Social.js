import React, { Component } from "react";
import { Label, Row } from "reactstrap";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

export default class Social extends Component {
    componentDidMount() {
  window.scrollTo(0, 0);
}
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
        className="w-100"
      >
        <div className="container p-5">
          <Row>
            <Label
              style={{ fontFamily: "Oswald" }}
              className="fs-2 fw-bold text-uppercase mb-5 mt-5 mx-auto text-center"
            >
              Yolculuğumuzu Takip Edin{" "}
              <a
                className="takip text-lowercase"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/rcicekli"
              >
                <u>@food</u>
              </a>
            </Label>
          </Row>

          <MDBRow>
            {/* İlk Kolon */}
            <MDBCol lg={4} md={4} sm={12} className="mb-4">
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

            {/* İkinci Kolon */}
            <MDBCol lg={4} md={4} sm={12} className="mb-4">
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

            {/* Üçüncü Kolon */}
             <MDBCol lg={4} md={4} sm={12} className="mb-4">
              <img
                src="https://picsum.photos/200/200"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
              <img
                src="https://picsum.photos/200/250"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <img
                src="https://picsum.photos/200/350"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </MDBCol>
          
          </MDBRow>
        </div>
      </div>
    );
  }
}
