import React from "react";
import { Label, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";

function Menu() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const menuItems = {
    "Başlangıç": [
      "Kabak Tarator",
      "Volovan",
      "Humus",
      "Parmigiana",
      "Bruschetta"
    ],
    "Ara Sıcak": [
      "Kıymalı Mantar Dolması",
      "Patlıcan Balığı",
      "Pastırmalı Humus",
      "Mücver",
      "Kaşarlı Patates Kroket"
    ],
    "Ana Yemek": [
      "Tavuk Dolma",
      "Krema ve Mantarlı Et Sote",
      "Pastırmalı Kuru Fasulye",
      "Beşamel Soslu Patlıcanlı Kaşarlı Köfte",
      "Kıymalı Alinazik Kebabı"
    ],
    "Tatlı": [
      "Cannoli",
      "Elmalı Strudel",
      "Baklava",
      "Karamelli Yapışkan Kek",
      "Kardemummabullar"
    ]
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <MyNav />
      
      <div className="mx-auto mt-5 p-5">
        <Label
          style={{ fontFamily: "Oswald" }}
          className="mt-3 text-uppercase fw-bold fs-3 text-center"
        >
          Günün Menüsü - {date}
        </Label>
      </div>

      <Row className="mx-0 justify-content-center">
        {Object.keys(menuItems).map((category, index) => (
          <Col key={index} md={6} lg={6} className="mb-4">
            <Card className="shadow-lg rounded-3">
              <CardBody>
                <CardTitle tag="h4" className="text-center mb-3">{category}</CardTitle>
                <ul className="list-unstyled">
                  {menuItems[category].map((item, idx) => (
                    <li key={idx} className="my-2">
                      <CardText className="text-center text-dark">{item}</CardText>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Menu;
