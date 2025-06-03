import React, { Component } from "react";
import { Label, Row, Col } from "reactstrap";
import MyNav from "./MyNav";
import Footer from "../Footer";

import nytimes from "../../assets/nytimes.png";
import cnn from "../../assets/cnn.png";
import fox from "../../assets/fox.png";
import usatoday from "../../assets/usatoday.png";
import spiegel from "../../assets/spiegel.png";
import cnn2 from "../../assets/cnn2.png";

export default class Medya extends Component {
  componentDidMount() {
  window.scrollTo(0, 0);
}
  render() {
    // Medya öğeleri için tek dizi
    const medyaItems = [
      
      {
        img: usatoday,
        comment: `"Bugüne kadar böyle lezzetli yemek yemediğinize eminiz.."`,
      },
      {
        img: fox,
        comment: `"Food Steak House. Tartışmasız bir numara.."`,
      },
      {
        img: cnn2,
        comment: `"Bayıldık..."`,
      },
      {
        img: spiegel,
        comment: `"Almanya’daki en muhteşem yer..."`,
      },
      {
        img: cnn,
        comment: `"Harika bir deneyim"`,
      },
      {
        img: nytimes,
        comment: `"New York'da hemen bir şube açmalı.."`,
      }
    ];

    return (
      <div
      style={{marginTop:"100px"}}
      className="container-fluid d-flex flex-column min-vh-100 p-0">
        <MyNav />

        <div className="text-center mt-5 p-3">
          <Label
            style={{ fontFamily: "Oswald" }}
            className="text-uppercase fw-bold fs-3"
          >
            Medyada Biz
          </Label>
        </div>

        <div className="container my-3 flex-grow-1">
          <Row className="g-4 justify-content-center">
            {medyaItems.map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className="d-flex justify-content-center"
              >
                <div className="card text-black bg-transparent border-0 w-100 p-2">
                  <img
                    src={item.img}
                    alt={`media-${index}`}
                    className="img-fluid rounded-5"
                  />
                  <Label
                    style={{ fontFamily: "Daktilo" }}
                    className="medya fw-bold text-uppercase mt-3 text-center d-block"
                  >
                    {item.comment}
                  </Label>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <Footer />
      </div>
    );
  }
}
