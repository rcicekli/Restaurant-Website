import React, { Component } from "react";
import { Row, Button, Col } from "reactstrap";
import MyNav from "./MyNav";
import garson from "../../assets/garson.jpg";
import wine from "../../assets/wine.png";
import Footer from "../Footer";

export default class Rezervasyon extends Component {
  componentDidMount() {
  window.scrollTo(0, 0);
}
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      kisi: "",
      telefon: "",
      email: "",
      mesaj: "",
    };

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
        "\nRezervasyon Tarihi :" +
        this.state.date +
        "\nKişi Sayısı :" +
        this.state.kisi +
        "\nÖzel Etkinlik :" +
        this.state.etkinlik +
        "\nTelefon :" +
        this.state.telefon +
        "\nMesaj :" +
        this.state.mesaj 
    );
    event.preventDefault();
  }
  render() {
    return (
      <div
        className="container-fluid min-vh-100 d-flex flex-column"
        style={{
      
          backgroundImage: `url(${wine})`,
          objectFit: "cover",
          backgroundRepeat: "repeat-y",
          backgroundPositionX: "2%",
          backgroundPositionY: "-50%",
          backgroundSize: "45%",
        }}
      >
        <MyNav />

        <div className="mt-5">
          <Row className="mx-auto py-5 m-5">
            <Col
              className="p-5 rounded-start"
              style={{ backgroundColor: " rgba(255, 255, 255, 0.57)" }}
              xl={6}
              sm={12}
              md={12}
              lg={12}
                          >
              <form  onSubmit={this.handleSubmit}>
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
                    aria-describedby="emailHelp"
                    placeholder="Ad Soyad"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group mb-2  fw-bold">
                  <label>Rezervasyon Tarihi</label>
                  <input
                    style={{
                      backgroundColor: "rgba(36, 28, 20, 0.10)",
                    }}
                    type="date"
                    className="form-control border-dark"
                    id="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group mb-2  fw-bold">
                  <label >Kişi Sayısı</label>
                  <select
                    style={{
                      backgroundColor: "rgba(36, 28, 20, 0.10)",
                    }}
                    className="form-control border-dark"
                    id="kisi"
                    value={this.state.kisi}
                    name="kisi"
                    onChange={this.handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group mb-2  fw-bold">
                  <label >Özel Etkinlik</label>
                  <select
                    style={{
                      backgroundColor: "rgba(36, 28, 20, 0.10)",
                    }}
                    className="form-control border-dark"
                    id="etkinlik"
                    name="etkinlik"
                    value={this.state.etkinlik}
                    onChange={this.handleChange}
                  >
                    <option>Yok</option>
                    <option>Sevgililer Günü</option>
                    <option>Yılbaşı</option>
                    <option>İş Yemeği</option>
                    <option>Doğum Günü</option>
                  </select>
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
                    aria-describedby="emailHelp"
                    placeholder="Telefon Numarası"
                    value={this.state.telefon}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group mb-2  fw-bold">
                  <label >
                    Eklemek İstedikleriniz..
                  </label>
                  <textarea
                    style={{
                      backgroundColor: "rgba(36, 28, 20, 0.10)",
                    }}
                    className="form-control border-dark"
                    id="mesaj"
                    name="mesaj"
                    rows="3"
                    value={this.state.mesaj}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <Button
                type="submit"
                  style={{
                    fontFamily: "Regular",
                    fontSize: "13px",
                    backgroundColor: "rgba(36, 28, 20, 0.15)",
                  }}
                  className="mt-3 p-3 fw-bold text-black"
                >
                  RESERVASYON Yap
                </Button>
              </form>
            </Col>
            <Col
              className="p-3 rounded-end"
              style={{ backgroundColor: " rgba(255, 255, 255, 0.57)" }}
              xl={6}
              sm={12}
              md={12}
              lg={12}
            >
              <img src={garson} alt="garson" width="100%" height="100%" />
            </Col>
          </Row>
        </div>
        <div className="row fixed-bottom">
          <Footer/>
        </div>
      </div>
    );
  }
}
