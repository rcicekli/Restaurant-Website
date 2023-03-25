import React, { Component } from "react";
import { Label } from "reactstrap";
import MyNav from "../NavbarComponents/MyNav";
import Footer from "../Footer";
import karakalem from "../../assets/karakalem.png";
import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";
import chef3 from "../../assets/chef3.jpg";
import chef4 from "../../assets/chef4.jpg";
import chef5 from "../../assets/chef5.jpg";
import chef6 from "../../assets/chef6.jpg";
import chef7 from "../../assets/chef7.jpg";
import chef8 from "../../assets/chef8.jpg";
import chef9 from "../../assets/chef9.jpg";

export default class Sefler extends Component {
  render() {
    return (
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row">
          <div className="col">
            <MyNav />
          </div>
        </div>
        <div className="row flex-grow-1 ">
          <div
            className="  d-flex align-items-center justify-content-center p-5"
            style={{
           
              backgroundImage: `url(${karakalem})`,
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "95%",
              backgroundPositionY: "50%",
              backgroundSize: "40%",
            }}
          >
            <section>
              <div
                className="container py-5 mt-5  rounded-5 "
                style={{ backgroundColor: " rgba(255, 255, 255, 0.33)" }}
              >
                <div className="row justify-content-center m-5">
                  <Label
                    style={{ fontFamily: "Oswald" }}
                    className="text-center text-uppercase tex-dark fs-3 m-3 mt-2"
                  >
                    Şeflerimiz
                  </Label>
                  <Label className="text-center mb-5 fw-bold">
                    <span style={{ fontFamily: "Oswald", fontSize: "20px" }}>
                      Dünya Çapında ünlü olan şeflerimiz sizlere hizmet etmek
                      için buradalar. Bu lezzetlerden geri kalmayın...
                    </span>
                  </Label>

                  <div className=" col-md-12 col-lg-4 col-xl-3">
                    <div className=" image card text-black bg-transparent border-0 ">
                      <img
                        src={chef9}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className=" image card text-black bg-transparent border-0 ">
                      <img
                        src={chef2}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className="image card text-black bg-transparent border-0 ">
                      <img
                        src={chef5}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center m-5">
                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className="image card text-black bg-transparent border-0 ">
                      <img
                        src={chef4}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className="image card text-black bg-transparent border-0 ">
                      <img
                        src={chef3}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className="image card text-black bg-transparent border-0 ">
                      <img
                        src={chef6}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center m-5">
                  <div className="col-md-12  col-lg-4 col-xl-3">
                    <div className="image card text-black bg-transparent border-0 ">
                      <img
                        src={chef7}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className=" image card text-black bg-transparent border-0">
                      <img
                        src={chef8}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-3">
                    <div className=" image card text-black bg-transparent border-0 ">
                      <img
                        src={chef1}
                        className=" rounded-end rounded-5"
                        alt="Apple Computer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
