import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const Gitİletisim = () => navigate("/iletisim");
  const GitKariyer = () => navigate("/kariyer");
  const GitGizlilik = () => navigate("/gizlilik");

  return (
    <footer className="bg-dark text-white p-1 mt-2">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Sol Menü */}
          <div className="col-12 col-md-6 mb-1 mb-md-0"
          >
            <ul className="nav flex-column flex-md-row justify-content-center justify-content-md-start ">
              <li className="nav-item mx-2">
                <span
                  className=" foot nav-link text-white p-0 cursor-pointer"
                  onClick={Gitİletisim}
                >
                  İletişim
                </span>
              </li>
              <li className=" foot nav-item mx-2">
                <span
                  className="nav-link text-white p-0 cursor-pointer"
                  onClick={GitKariyer}
                >
                  Kariyer
                </span>
              </li>
              <li className="foot nav-item mx-2">
                <span
                  className="nav-link text-white p-0 cursor-pointer"
                  onClick={GitGizlilik}
                >
                  Gizlilik Sözleşmesi
                </span>
              </li>
            </ul>
          </div>

          {/* Sağ Menü */}
          <div className="col-12 col-md-6 d-flex flex-row align-items-center align-items-md-end gap-2 justify-content-center justify-content-md-end">
            <a
              href="https://github.com/rcicekli"
              target="_blank"
              rel="noreferrer"
              className="abone btn btn-outline-light btn-sm text-uppercase"
            >
              Abone Ol
            </a>
            <div className=" d-flex gap-2 fs-4 m-1 justify-content-center align-items-center">
              <FaFacebook className="ikonlar text-info" />
              <FaInstagram className="ikonlar text-danger" />
              <FaTwitter className="ikonlar text-info" />
              <FaGoogle className="ikonlar text-warning" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
