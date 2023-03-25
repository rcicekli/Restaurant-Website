import React, { Component } from "react";
import { Button } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";

import posta from "../assets/posta.png";
import Footer from "../components/Footer";

export default class İletisim extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", konu: "", telefon: "", email: "", mesaj: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    // alert('Gönderilen İsim ' + this.state.name+"\nGönderilen Konu : "+this.state.konu
    // +"\nTelefon :"+this.state.telefon+
    // "\nMail :"+this.state.email+
    // "\nKonu :"+this.state.mesaj);

    alert(
      "İsim :" +
        this.state.name +
        "\n Konu : " +
        this.state.konu +
        "\nTelefon :" +
        this.state.telefon +
        "\nMail :" +
        this.state.email +
        "\nKonu :" +
        this.state.mesaj
    );
    event.preventDefault();
  }
  render() {
    return (
      <div
        className="container-fluid min-vh-100 d-flex flex-column p-5 "
        style={{
       
          backgroundImage: `url(${posta})`,
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
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center m-4">Bizimle İletişime Geç</h1>
            <div className="form-group mb-2 fw-bold">
              <label >Ad Soyad</label>
              <input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="text"
                className="form-control border-dark"
                id="name"
                name="name"
                placeholder="Ad Soyad"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-2  fw-bold">
              <label >İletişim Konusu</label>
              <input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="text"
                name="konu"
                className="form-control border-dark"
                id="konu"
                placeholder="Konu"
                value={this.state.konu}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group mb-2  fw-bold">
              <label >Telefon Numarası</label>
              <input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="number"
                className="form-control border-dark"
                name="telefon"
                id="telefon"
                placeholder="Telefon Numarası"
                value={this.state.telefon}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-2  fw-bold">
              <label >Email</label>
              <input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="email"
                name="email"
                className="form-control border-dark"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group mb-2  fw-bold">
              <label >Mesaj..</label>
              <textarea
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                className="form-control border-dark"
                id="mesaj"
                name="mesaj"
                rows="3"
                placeholder="Mesajınızı Buraya Yazınız..."
                value={this.state.mesaj}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <Button
              type="submit"
              style={{
                fontFamily: "Regular",
                fontSize: "13px",
                backgroundColor: "rgba(36, 28, 20, 0.10)",
              }}
              className="mt-3 p-3 fw-bold text-black"
            >
              Gonder
            </Button>
          </form>
        </div>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    );
  }
}
