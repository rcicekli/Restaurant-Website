import React, { Component } from "react";
import { Row, Col, Label, Button } from "reactstrap";
import chef from "../../assets/chefs.jpg";
import MyNav from "./MyNav";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default class BizKimiz extends Component {
  render() {
    return (
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row">
          <div className="col">
            <MyNav />
          </div>
        </div>
        <div className="row flex-grow-1">
          <div className="col-md-12 d-flex align-items-center">
            <Row>
              {/* Text Section */}
              <Col className="my-auto p-5" md={12} lg={6} sm={12}>
                <Row>
                  <Label
                    className="fs-3 fs-md-2 text-uppercase mb-5 fw-bold mt-5"
                    style={{ fontFamily: "Oswald" }}
                  >
                    Biz Kimiz
                  </Label>
                  <Label
                    style={{ fontFamily: "Daktilo", fontSize: "16px", maxWidth: "100%" }}
                  >
                    <span style={{ fontFamily: "Alpha", fontSize: "30px" }}>
                      food
                    </span>
                    , birbirinden ünlü şefler ve onların harika menüleri ile size
                    unutamayacağınız deneyimler yaşatıyor. Lorem Ipsum, dizgi ve baskı
                    endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
                    bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
                    galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                    sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
                    sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
                    yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
                    Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
                    popüler olmuştur.
                  </Label>
                  <Label style={{ fontFamily: "Daktilo", fontSize: "16px" }}>
                    Aşağıdan veya buradan özel davet oluşturabilirsiniz.
                  </Label>
                </Row>
                {/* Buttons Section */}
                <Row>
                  <Col xs={12} className="d-flex flex-column flex-md-row">
                    <Link to="/etkinlik">
                      <Button
                        style={{ fontFamily: "Daktilo", fontSize: "14px" }}
                        className="bizkimizbtn mt-5 mb-3 border-black border-2 text-uppercase bg-transparent p-2"
                      >
                        Etkinliklerimiz
                      </Button>
                    </Link>
                    <Link to="/rezervasyon">
                      <Button
                        style={{ fontFamily: "Daktilo", fontSize: "14px" }}
                        className="bizkimizbtn mt-5 mb-3 ms-md-4 border-black border-2 text-uppercase bg-transparent p-2"
                      >
                        Akşam Yemeği?
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>

              {/* Image Section */}
              <Col
                className="rounded-5 p-5"
                md={12}
                lg={6}
                sm={12}
                style={{
                  boxShadow: "0 0 60px 15px #fff",
                }}
              >
                <img
                  className="rounded-4 img-fluid"
                  src={chef}
                  alt="Chef"
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
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
