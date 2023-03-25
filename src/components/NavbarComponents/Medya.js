import React, { Component } from "react";
import { Label, Row } from "reactstrap";
import MyNav from "./MyNav";
import nytimes from "../../assets/nytimes.png";
import cnn from "../../assets/cnn.png";
import fox from "../../assets/fox.png";
import usatoday from "../../assets/usatoday.png";
import spiegel from "../../assets/spiegel.png";
import Footer from "../Footer";
import cnn2 from "../../assets/cnn2.png";

export default class Medya extends Component {
  render() {
    return (
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <MyNav />

        <div className="mx-auto mt-5 p-5">
          <Label
            style={{ fontFamily: "Oswald" }}
            className="text-uppercase fw-bold fs-3"
          >
            Medyada Biz
          </Label>
        </div>
        <Row>
          <div
            className=" align-items-start  align-items-center justify-content-center"
            style={{
              objectFit: "cover",
              backgroundRepeat: "repeat-y",
              backgroundPositionX: "-46%",
              backgroundPositionY: "60%",
              backgroundSize: "45%",
            }}
          >
            <section>
              <div
                className="rounded-5"
                style={{ backgroundColor: " rgba(255, 255, 255, 0.20)" }}
              >
                <div className="row justify-content-center">
                  <div className=" col-md-2 col-lg-2 col-xl-3 col-sm-12 m-5">
                    <div className="  card text-black bg-transparent border-0 ">
                      <img
                        src={nytimes}
                        className=" rounded rounded-5"
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase mt-4 text-center "
                      >
                        "New york'da hemen bir şube açmalı.."
                      </Label>
                    </div>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-3  col-sm-12  m-5 ">
                    <div className="  card text-black bg-transparent border-0 ">
                      <img
                        src={usatoday}
                        className=" rounded rounded-5"
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase mt-3 text-center "
                      >
                        "Bugüne kadar böyle lezzetli yemek yemediğinize miniz.."
                      </Label>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-3  col-sm-12  m-5 ">
                    <div className="  card text-black bg-transparent border-0 ">
                      <img
                        src={fox}
                        className=" rounded rounded-5"
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase mt-5 text-center "
                      >
                        "food steak house. Tartışmasız bir numara.."
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center ">
                  <div className="col-md-2 col-lg-2 col-xl-3  col-sm-12  m-5 ">
                    <div className="  card text-black bg-transparent border-0">
                      <img
                        src={cnn2}
                        className=" rounded rounded-5"
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase text-center"
                      >
                        "Bayıldık..."
                      </Label>
                    </div>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-3 col-sm-12  m-5">
                    <div className=" card text-black bg-transparent border-0  ">
                      <img
                        src={spiegel}
                        className=" rounded rounded-5 "
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase text-center"
                      >
                        "Almanyadaki en muhteşem yer..."
                      </Label>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-3  col-sm-12  m-5 ">
                    <div className="  card text-black bg-transparent border-0">
                      <img
                        src={cnn}
                        className=" rounded rounded-5"
                        alt="Apple Computer"
                      />
                      <Label
                        style={{ fontFamily: "Daktilo" }}
                        className="fw-bold text-uppercase text-center"
                      >
                        "Harika Bir deneyim"
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
        <div className="row fixed-bottom">
          <Footer />
        </div>
      </div>
    );
  }
}
