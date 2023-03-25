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
          <div
            className="col-md-12  d-flex align-items-center "
          
          >
            <Row>
              <Col className="my-auto p-5" md={12} lg={6} sm={12}>
                <Row>
                  {" "}
                  <Label
                    className="fs-2 text-uppercase   mb-5 fw-bold mt-5"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {" "}
                    Biz Kimiz{" "}
                  </Label>
                  <Label style={{ fontFamily: "Daktilo" }}>
                    <span style={{ fontFamily: "Alpha", fontSize: "30px" }}>
                      food
                    </span>{" "}
                    , birbirinden ünlü şefler ve onların harika menüleri ile
                    size unutamayacağınız deneyimler yaşaLorem Ipsum, dizgi ve
                    baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem
                    Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
                    kitabı oluşturmak üzere bir yazı galerisini alarak
                    karıştırdığı 1500'lerden beri endüstri standardı sahte
                    metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                    sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                    dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                    içeren Letraset yapraklarının yayınlanması ile ve yakın
                    zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                    masaüstü yayıncılık yazılımları ile popüler olmuştur.tıyor.
                  </Label>
                  <Label style={{ fontFamily: "Daktilo" }}>
                    {" "}
                    Aşağıdan veya buradan özel davet oluşturabilirsiniz.
                  </Label>
                </Row>
                <Link to="/etkinlik">
                  <Button
                    style={{ fontFamily: "Daktilo" }}
                    className="bizkimizbtn mt-5 border-black border-2 float-start  ms-1 mb-3  text-uppercase bg-transparent p-2"
                  >
                    Etkinliklerimiz
                  </Button>
                </Link>
                <Link to="/rezervasyon">
                 
                  <Button
                    style={{ fontFamily: "Daktilo" }}
                    className="bizkimizbtn mt-5 border-black border-2 float-start  ms-5 mb-3  text-uppercase bg-transparent p-2"
                  >
                    Akşam Yemeği ?
                  </Button>
                </Link>
              </Col>

              <Col
                className="rounded-5 p-5 "
                md={12}
                lg={6}
                sm={12}
                style={{
                  boxShadow: " 0 0 60px 15px #fff",
                }}
              >
                <img
                  className="rounded-4"
                  src={chef}
                  alt="Steak"
                  width="100%"
                  height="100%"
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
