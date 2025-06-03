import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import steak from "../assets/steak.jpg";
import karakalem from "../assets/karakalem.png";
import { Link } from "react-router-dom";

export default class GoRezervasion extends Component {
  componentDidMount() {
  window.scrollTo(0, 0);
}
  render() {
    return (
      <div
        className="w-100 min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${karakalem})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "1% 99%",
          backgroundSize: "contain",
        }}
      >
        <div
          className="container p-4 p-md-5 rounded-4"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.20)" }}
        >
          <Row className="align-items-center">
            {/* Text Section */}
            <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h2
                className="fs-3 fs-md-2 text-uppercase fw-bold mb-4"
                style={{ fontFamily: "Oswald" }}
              >
                Eşsiz Yemeklerin Arkasındaki Şeflere Bağlanın
              </h2>

              <p style={{ fontFamily: "Daktilo", fontSize: "16px", maxWidth: "100%" }}>
                <span style={{ fontFamily: "Alpha", fontSize: "30px" }}>food</span>, birbirinden ünlü şefler ve onların harika menüleri ile size unutamayacağınız deneyimler yaşatıyor.
              </p>

              <p style={{ fontFamily: "Daktilo", fontSize: "16px" }}>
                Aşağıdan veya buradan özel davet oluşturabilirsiniz.
              </p>

              <Link to="/menu">
                <Button
                  className="yemekgor mt-4 border border-dark text-uppercase bg-transparent px-4 py-2 "
                  style={{ fontFamily: "Daktilo", fontSize: "14px" }}
                >
                  Yemekleri Gör
                </Button>
              </Link>
            </Col>

            {/* Image Section */}
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <img
                src={steak}
                alt="Steak"
                className="img-fluid rounded-3"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
