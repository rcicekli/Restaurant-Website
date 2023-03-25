import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,

  Row,
  Col,
} from "reactstrap";
import { FaInstagram, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const Gitİletisim = () => {
    navigate(`/iletisim`);
  };

  const GitKariyer = () => {
    navigate(`/kariyer`);
  };

  const GitGizlilik = () => {
    navigate(`/gizlilik`);
  };

  return (
    <div className="myfooter">
      <Row className="w-100 ">
        <Col className="p-3" sm={4} md={4} xs={4}>
          <Navbar
            {...args}
            expand="md"
            style={{
              fontSize: "13px",
            }}
            className="position-relative fixed-bottom "
          >
      
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
              <Nav
                className=" fw-bold "
                style={{ fontFamily: "Regular" }}
                navbar
              >
                <div className=" foot mx-2  ">
                  <div onClick={Gitİletisim} >
                    iletisim
                  </div>
                </div>
                <div onClick={GitKariyer} className="foot mx-2  ">
                  <div >kariyer</div>
                </div>
                <div onClick={GitGizlilik} className=" foot mx-2 ">
                  <div >
                    Gizlilik sozlesmesi
                  </div>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
        <Col className=" p-3 ms-auto d-flex justify-content-center" sm={4} md={2} xs={4}>
          <a
            href="https://www.youtube.com/channel/UCc_aQ56OI4B-sjb4GbWBjQA?app=desktop"
            target="_blank"
            rel="noreferrer"
            className="abone  p-2 rounded-2 bg-transparent text-decoration-none text-uppercase fw-bold m-1 "
         
          >
            Abone Ol
          </a>

          <div className="mt-2 mx-3">
            <FaFacebook className="ikonlar mx-2 text-info " />
            <FaInstagram className="ikonlar mx-2 text-danger " />

            <FaTwitter className="ikonlar mx-2 text-info " />
            <FaGoogle className="ikonlar mx-2 text-warning " />
          </div>
        </Col>{" "}
      </Row>
    </div>
  );
}

export default Footer;
