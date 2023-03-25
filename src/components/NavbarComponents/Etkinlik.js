import React, { Component } from "react";
import { Carousel } from "react-carousel-minimal";
import { Label, Button } from "reactstrap";
import MyNav from "./MyNav";
import { FaCheck } from "react-icons/fa";
import Footer from "../Footer";
import etkinlik1 from "../../assets/etkinlik1.jpg";
import etkinlik2 from "../../assets/etkinlik2.jpg";
import etkinlik3 from "../../assets/etkinlik3.jpg";
import etkinlik4 from "../../assets/etkinlik4.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    image:
      "https://www.leebropos.com/wp-content/uploads/2018/02/bigstock-Romantic-Couple-In-Restaurant-223373131.jpg",
    caption: "Sevgililer Günü",
  },
  {
    image:
      "https://im.haberturk.com/2019/12/26/ver1577349688/2553069_61851a5f78c2b019502c9321159e5565.jpg",
    caption: "Yılbaşı",
  },
  {
    image: "https://www.digimekan.com/upload/sosyal/piya70043twwk8s0os.jpg",
    caption: "Doğum Günü",
  },
  {
    image:
      "https://digital.ihg.com/is/image/ihg/holiday-inn-istanbul-4296275520-2x1",
    caption: "İş Toplantısı",
  },
];

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

export default class Etkinlik extends Component {
  render() {
    return (
      <div className="App ">
        <div style={{ textAlign: "center", backgroundColor: "#E8D4C3" }}>
          <MyNav />

          <div
            style={{
              padding: "0 2px",
            }}
          >
            <Carousel
              data={data}
              time={1500}
              width="100%"
              height="500px"
              captionStyle={captionStyle}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="#E8D4C3"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "0px auto",
              }}
            />
          </div>
        </div>
        <div
          className="p-5  align-items-start  align-items-center justify-content-center"
          style={{
          
            objectFit: "cover",
            backgroundRepeat: "repeat-y",
            backgroundPositionX: "-46%",
            backgroundPositionY: "0%",
            backgroundSize: "60%",
          }}
        >
          <Label
            style={{ fontSize: "30px", fontFamily: "Oswald" }}
            className="text-uppercase container"
          >
            Her Masa Bizim İçin Özeldir
          </Label>
          <Label
            style={{ fontFamily: "Oswald", fontSize: "20px" }}
            className="p-5 container"
          >
            Biz bir restoran değiliz. Samimi mekanlarımızın her biri, çoğu özel
            yemek odasında elde edilmesi imkansız olan mahremiyet ve
            kişiselleştirme sunar. Lüks konut alanlarımızdan birinde kendinizi
            evinizde hissedin ve bir sonraki iş toplantınız, doğum günü partiniz
            veya aradaki herhangi bir şey için beş yıldızlı bir yemek
            deneyiminin tadını çıkarın.
          </Label>

          <section>
            <div>
              <div className="row justify-content-center m-5">
                <div className=" col-md-4 col-lg-4 col-xl-4 col-sm-12 m-5">
                  <div className="  card text-black bg-transparent border-0 ">
                    <img
                      src={etkinlik1}
                      className=" rounded rounded-5"
                      alt="Apple Computer"
                    />
                    <Label
                      style={{ fontFamily: "Daktilo" }}
                      className="fw-bold text-uppercase mt-3 img-fluid"
                    >
                      Unutamayacağınız Bir Yemek..
                    </Label>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4  col-sm-12  m-5 ">
                  <div className="  card text-black bg-transparent border-0 ">
                    <img
                      src={etkinlik2}
                      className=" rounded rounded-5"
                      alt="Apple Computer"
                    />
                    <Label
                      style={{ fontFamily: "Daktilo" }}
                      className="fw-bold text-uppercase mt-3 img-fluid"
                    >
                      Güzel Anılar..
                    </Label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center m-5">
                <div className="col-md-4 col-lg-4 col-xl-4  col-sm-12  m-5">
                  <div className=" card text-black bg-transparent border-0 ">
                    <img
                      src={etkinlik3}
                      className=" rounded rounded-5  img-fluid"
                      alt="Apple Computer"
                    />
                    <Label
                      style={{ fontFamily: "Daktilo" }}
                      className="fw-bold text-uppercase mt-3"
                    >
                      Dünya mutfağı..
                    </Label>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12  m-5">
                  <div className=" card text-black bg-transparent border-0 ">
                    <img
                      src={etkinlik4}
                      className=" rounded rounded-5 img-fluid"
                      alt="Apple Computer"
                    />
                    <Label
                      style={{ fontFamily: "Daktilo" }}
                      className="fw-bold text-uppercase mt-3"
                    >
                      SAğlıklı ürünler..
                    </Label>
                  </div>
                </div>
              </div>
              <Link to="/rezervasyon">
                {" "}
                <Button
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "20px",
                    backgroundColor: "rgba(36, 28, 20, 0.10)",
                  }}
                  className="p-3 text-uppercase text-black"
                >
                  hemen rezervasyon yap <FaCheck />
                </Button>{" "}
              </Link>
            </div>
          </section>
        </div>
        <div >
          <Footer />
        </div>
      </div>
    );
  }
}
