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
    const chefs = [
      chef9, chef2, chef5,
      chef4, chef3, chef6,
      chef7, chef8, chef1,
    ];

    return (
      <div className="container-fluid d-flex flex-column min-vh-100 p-0">
        <MyNav />

        {/* Ana içerik */}
        <div
          className="flex-grow-1 d-flex align-items-center justify-content-center py-5"
          style={{
            backgroundImage: `url(${karakalem})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% 50%",
            backgroundSize: "40%",
            backgroundAttachment: "fixed",
          }}
        >
          <section className="container py-4 px-3 px-md-5 rounded-5"
            style={{ 
              marginTop:"110px",
              backgroundColor: "rgba(255, 255, 255, 0.33)" }}
          >
            <div className="text-center mb-5">
              <Label
                style={{ fontFamily: "Oswald" }}
                className="text-uppercase text-dark fs-3 d-block mb-2"
              >
                Şeflerimiz
              </Label>
              <Label className="fw-bold d-block">
                <span style={{ fontFamily: "Oswald", fontSize: "20px" }}>
                  Dünya Çapında ünlü olan şeflerimiz sizlere hizmet etmek için buradalar. Bu lezzetlerden geri kalmayın...
                </span>
              </Label>
            </div>

            {/* Şef kartları */}
            <div className="row justify-content-center">
              {chefs.map((chef, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 mb-4 d-flex justify-content-center"
                  key={index}
                >
                  <div className="card border-0 bg-transparent w-100">
                    <img
                      src={chef}
                      alt={`Chef ${index + 1}`}
                      className="img-fluid rounded-5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
