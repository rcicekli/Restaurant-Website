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
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `İsim: ${this.state.name}\nTelefon: ${this.state.telefon}\nMail: ${this.state.email}\nMesaj: ${this.state.mesaj}`
    );
  }

  render() {
    return (
      <div
        className="min-vh-100 d-flex flex-column"
        style={{
          marginTop:"120px",
          backgroundImage: `url(${karakalem})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
        }}
      >
        <MyNav />

        <div className="container flex-grow-1 py-5">
          <div
            className="p-4 p-md-5 rounded-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}
          >
            <form onSubmit={this.handleSubmit}>
              <h1 className="text-center mb-4">Takımımıza Katıl</h1>
              <h5 className="text-center mb-4">
                Yeteneklerine güveniyorsan ve Dünya Mutfağı'na ilgiliysen aramıza katılabilirsin.
                Seni bekliyoruz!
              </h5>

              <div className="form-group mb-3 fw-bold">
                <label>Ad Soyad</label>
                <input
                  type="text"
                  className="form-control border-dark"
                  name="name"
                  placeholder="Ad Soyad"
                  value={this.state.name}
                  onChange={this.handleChange}
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  required
                />
              </div>

              <div className="form-group mb-3 fw-bold">
                <label>Telefon Numarası</label>
                <input
                  type="tel"
                  className="form-control border-dark"
                  name="telefon"
                  placeholder="Telefon Numarası"
                  value={this.state.telefon}
                  onChange={this.handleChange}
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  required
                />
              </div>

              <div className="form-group mb-3 fw-bold">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control border-dark"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  required
                />
              </div>

              <div className="form-group mb-3 fw-bold">
                <label>Kendinden Biraz Bahset</label>
                <textarea
                  className="form-control border-dark"
                  name="mesaj"
                  rows="4"
                  placeholder="Yeteneklerini ve deneyimlerini bizimle paylaş"
                  value={this.state.mesaj}
                  onChange={this.handleChange}
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                  required
                ></textarea>
              </div>

              <FormGroup>
                <Label className="fw-bold" for="exampleFile">
                  CV'ni Bizimle Paylaş
                </Label>
                <Input
                  type="file"
                  name="file"
                  id="exampleFile"
                  style={{ backgroundColor: "rgba(36, 28, 20, 0.10)" }}
                />
              </FormGroup>

              <Button
                type="submit"
                className="btn btn-dark mt-4 fw-bold w-100"
                style={{ fontSize: "14px" }}
              >
                Başvur
              </Button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
