import React, { Component } from "react";
import { Row, Col, Label, Button } from "reactstrap";
import steak from "../assets/steak.jpg";
import karakalem from "../assets/karakalem.png";
import { Link } from "react-router-dom";


export default class GoRezervasion extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${karakalem})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "1%",
          backgroundPositionY: "99%",
          height: "100%",
          width: "100%",

          left: 0,
          top: 0,
        }}
        className="saydam vh-100 w-100 "
      >
        <div className=" px-3  h-100 d-flex align-items-center justify-content-center">
          <div
         style={{ backgroundColor: " rgba(255, 255, 255, 0.20)" }}
          >
            <Row>
              <Col className="my-auto p-5" md={6}>
                <Row>
                  {" "}
                  <Label
                    className="fs-2 text-uppercase  mb-5 fw-bold"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {" "}
                    Eşsiz Yemeklerin Arkasındaki Şeflere Bağlanın{" "}
                  </Label>
                  <Label style={{ fontFamily: "Daktilo" }}>
                    <span style={{ fontFamily: "Alpha", fontSize: "30px" }}>
                      food
                    </span>{" "}
                    , birbirinden ünlü şefler ve onların harika menüleri ile
                    size unutamayacağınız deneyimler yaşatıyor.
                  </Label>
                  <Label style={{ fontFamily: "Daktilo" }}>
                    {" "}
                    Aşağıdan veya buradan özel davet oluşturabilirsiniz.
                  </Label>
                </Row>
                <Link to="/menu">
                  {" "}
                  <Button
                    style={{ fontFamily: "Daktilo" }}
                    className="yemekbtn mt-5 border-black border-2 float-start  ms-5 mb-3  text-uppercase bg-transparent p-2"
                  >
                    Yemekleri Gör
                  </Button>
                </Link>
              </Col>

              <Col md={6}>
                <img src={steak} alt="Steak" width="100%" height="100%" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
