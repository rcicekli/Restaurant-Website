import React from "react";
import { Label, Row } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menu() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column"
      
    >
      <MyNav />

      <div className="mx-auto mt-5 p-5">
        <Label
          style={{ fontFamily: "Oswald" }}
          className="mt-3 text-uppercase fw-bold fs-3"
        >
          Günün Menüsü - {date}
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
          <div
            className="container rounded-5 p-5"
            style={{
              backgroundColor: " rgba(255, 255, 255, 0.40)",
              fontFamily: "Oswald",
            }}
          >
            <h3 className="text-center m-3 ">Başlangıç </h3>
            <ListGroup>
              <ListGroupItem color="success" tag="a" href="#" action>
                Kabak Tarator
              </ListGroupItem>
              <ListGroupItem color="success" tag="a" href="#" action>
                Volovan
              </ListGroupItem>
              <ListGroupItem color="success" tag="a" href="#" action>
                Humus
              </ListGroupItem>
              <ListGroupItem color="success" tag="a" href="#" action>
                Parmigiana
              </ListGroupItem>
              <ListGroupItem color="success" tag="a" href="#" action>
                Bruschetta
              </ListGroupItem>
            </ListGroup>
            <p />
            <h3 className="text-center m-3 ">Ara Sıcak </h3>
            <ListGroup>
              <ListGroupItem color="info" tag="button" action>
                Kıymalı Mantar Dolması
              </ListGroupItem>
              <ListGroupItem color="info" tag="button" action>
                Patlıcan Balığı
              </ListGroupItem>
              <ListGroupItem color="info" tag="button" action>
                Pastırmalı Humus
              </ListGroupItem>
              <ListGroupItem color="info" tag="button" action>
                Mücver
              </ListGroupItem>
              <ListGroupItem color="info" tag="button" action>
                Kaşarlı Patates Kroket
              </ListGroupItem>
            </ListGroup>
            <h3 className="text-center m-3">Ana Yemek </h3>
            <ListGroup>
              <ListGroupItem color="warning" tag="a" href="#" action>
                Tavuk Dolma
              </ListGroupItem>
              <ListGroupItem color="warning" tag="a" href="#" action>
                Krema ve Mantarlı Et Sote
              </ListGroupItem>
              <ListGroupItem color="warning" tag="a" href="#" action>
                Pastırmalı Kuru Fasulye
              </ListGroupItem>
              <ListGroupItem color="warning" tag="a" href="#" action>
                Beşamel Soslu Patlıcanlı Kaşarlı Köfte
              </ListGroupItem>
              <ListGroupItem color="warning" tag="a" href="#" action>
                Kıymalı Alinazik Kebabı
              </ListGroupItem>
            </ListGroup>
            <p />
            <h3 className="text-center m-3">Tatlı </h3>
            <ListGroup>
              <ListGroupItem color="danger" tag="button" action>
                Cannoli
              </ListGroupItem>
              <ListGroupItem color="danger" tag="button" action>
                Elmalı Strudel
              </ListGroupItem>
              <ListGroupItem color="danger" tag="button" action>
                Baklava
              </ListGroupItem>
              <ListGroupItem color="danger" tag="button" action>
                Karamelli Yapışkan Kek
              </ListGroupItem>
              <ListGroupItem color="danger" tag="button" action>
                Kardemummabullar
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </Row>
    </div>
  );
}
export default Menu;
