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
    event.preventDefault();
    alert(
      `İsim: ${this.state.name}\nKonu: ${this.state.konu}\nTelefon: ${this.state.telefon}\nEmail: ${this.state.email}\nMesaj: ${this.state.mesaj}`
    );
  }

  render() {
    return (
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          backgroundImage: `url(${posta})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
        }}
      >
        <MyNav />

        <div className="container my-5">
          <div
            className="p-2 p-md-5 rounded-4"
            style={{ 
              marginTop:"75px",
              backgroundColor: "rgba(255, 255, 255, 0.33)" }}
          >
            <form onSubmit={this.handleSubmit}>
              <h2 className="text-center mb-4 fw-bold">Bizimle İletişime Geç</h2>

              <div className="mb-3">
                <label className="form-label fw-bold">Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  placeholder="Ad Soyad"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">İletişim Konusu</label>
                <input
                  type="text"
                  name="konu"
                  className="form-control"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  placeholder="Konu"
                  value={this.state.konu}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Telefon Numarası</label>
                <input
                  type="tel"
                  name="telefon"
                  className="form-control"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  placeholder="Telefon Numarası"
                  value={this.state.telefon}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Mesaj</label>
                <textarea
                  name="mesaj"
                  rows="4"
                  className="form-control"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  placeholder="Mesajınızı buraya yazınız..."
                  value={this.state.mesaj}
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="btn btn-dark mt-3 w-100 fw-bold"
                style={{ fontSize: "14px" }}
              >
                Gönder
              </Button>
            </form>
          </div>
        </div>

        <div className="fixed-bottom ">
 <Footer  />
        </div>
       
      </div>
    );
  }
}
