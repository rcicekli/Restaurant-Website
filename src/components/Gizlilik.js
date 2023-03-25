import React, { Component } from "react";
import { Label } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";

import Footer from "../components/Footer";

export default class Gizlilik extends Component {
  render() {
    return (
      <div
        className="container-fluid min-vh-100 d-flex flex-column p-5 "
        style={{
        
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "-10%",
          backgroundPositionY: "120%",
          backgroundSize: "30%",
        }}
      >
        <MyNav />

        <div
          className="container mt-5 p-5 rounded-5"
          style={{ backgroundColor: " rgba(255, 255, 255, 0.33)" }}
        >
          <h1 className="text-center m-4">Gizlilik Politikası</h1>
          <Label className="text-center m-4">
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
          <Label className="text-center m-4">
            Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
            Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar
            uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney
            College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum
            pasajında geçen ve anlaşılması en güç sözcüklerden biri olan
            'consectetur' sözcüğünün klasik edebiyattaki örneklerini
            incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero
            tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et
            Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33
            sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
            tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
            pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
            sayılı bölümdeki bir satırdan gelmektedir.
          </Label>
        </div>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    );
  }
}
