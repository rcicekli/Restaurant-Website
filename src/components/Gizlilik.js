import React, { Component } from "react";
import { Label } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";
import Footer from "../components/Footer";

export default class Gizlilik extends Component {
  render() {
    return (
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          marginTop:"120px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "30%",
        }}
      >
        {/* Navbar */}
        <MyNav />

        {/* İçerik */}
        <div className="container flex-grow-1 py-5">
          <div
            className="p-4 p-md-5 rounded-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}
          >
            <h1 className="text-center mb-4">Gizlilik Politikası</h1>

            <Label className="d-block text-justify mb-4">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
            </Label>

            <Label className="d-block text-justify">
             Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
            </Label>
          </div>
        </div>

        {/* Footer en altta */}
        <Footer />
      </div>
    );
  }
}
