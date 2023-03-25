import React, { Component } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import MyNav from "./NavbarComponents/MyNav";

import Footer from "../components/Footer";
import karakalem from "../assets/karakalem.png";

export default class Kariyer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", telefon: "", email: "", mesaj: "" };

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
        "\nTelefon:" +
        this.state.telefon +
        "\nMail :" +
        this.state.email +
        "\nMesaj :" +
        this.state.mesaj
    );
    event.preventDefault();
  }
  render() {
    return (
      <div
        className="container-fluid min-vh-100 d-flex flex-column p-5"
        style={{
        
          backgroundImage: `url(${karakalem})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "95%",
          backgroundPositionY: "150%",
          backgroundSize: "30%",
        }}
      >
        <MyNav />

        <div
          className="container mt-5 p-5 rounded-5"
          style={{ backgroundColor: " rgba(255, 255, 255, 0.33)" }}
        >
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center m-4">Takımımıza Katıl</h1>
            <h5 className="text-center m-4">
              Yeteneklerine güveniyorsan ve Dünya Mutfağı'na ilgiliysen aramıza
              katılabilirsin.. Seni Bekliyoruz{" "}
            </h5>
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
              <label >Telefon Numarası</label>
              <input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="number"
                className="form-control border-dark"
                id="telefon"
                name="telefon"
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
                className="form-control border-dark"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group mb-2  fw-bold">
              <label >
                Kendinden Biraz Bahset
              </label>
              <textarea
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                className="form-control border-dark"
                id="mesaj"
                name="mesaj"
                rows="3"
                placeholder="Yeteneklerini ve Deneyimeini Bizimle Paylaş"
                value={this.state.mesaj}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <FormGroup>
              <Label className="fw-bold" for="exampleFile">
                CV'ni Bizimle Paylaş
              </Label>
              <Input
                style={{
                  backgroundColor: "rgba(36, 28, 20, 0.10)",
                }}
                type="file"
                name="file"
                id="exampleFile"
              />
            </FormGroup>
            <Button
              style={{
                fontFamily: "Regular",
                fontSize: "13px",
                backgroundColor: "rgba(36, 28, 20, 0.10)",
              }}
              className="mt-3 p-3 fw-bold text-black"
            >
              Basvur{" "}
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
