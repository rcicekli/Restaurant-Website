import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";
import "../../App.css";
import { useNavigate } from "react-router-dom";

import { Toggle } from "../../components/Toggle";
import { useDarkMode } from "../../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../../styles/globalStyles";
import  { ThemeProvider } from "styled-components";

function MyNav(args) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  const navigate = useNavigate();

  const GitBiz = () => {
    navigate(`/bizkimiz`);
  };
  const GitChef = () => {
    navigate(`/seflerimiz`);
  };
  const GitEtkinlik = () => {
    navigate(`/etkinlik`);
  };
  const GitMedya = () => {
    navigate(`/medya`);
  };
  const Gitrezervasyon = () => {
    navigate(`/rezervasyon`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ThemeProvider theme={themeMode}>
      <div >
        <Navbar
          {...args}
          expand="md"
          style={{ fontSize: "13px" }}
          className="p-0 fixed-top mynav"
        >
          <NavbarBrand
            className=" p-0 ms-4 foodtext"
            style={{ fontFamily: "Alpha", fontSize: "70px" }}
            href="/"
          >
            food
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="ms-auto fw-bold "
              style={{ fontFamily: "Panton", fontSize: "17px" }}
              navbar
            >
              <NavItem>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <Container>
                  <GlobalStyles />
                </Container>
              </NavItem>
              <NavItem>
                <NavLink
                  className="raise mx-2 cursor:grab "
                  onClick={GitBiz}
                >
                  Biz Kimiz
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="raise mx-2 " onClick={GitChef}>
                  Şeflerimiz
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="raise mx-2 "
                  onClick={GitEtkinlik}
                >
                  Özel Etkinlikler
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={GitMedya} className="raise mx-2 ">
                  Medyada Biz
                </NavLink>
              </NavItem>
            </Nav>

            <Button
              onClick={Gitrezervasyon}
              style={{
                fontSize: "15px",
                backgroundColor: "rgba(36, 28, 20, 0.10)",
              }}
              className=" raise  p-3  "
            >
              REZERVASYON
            </Button>
          </Collapse>
        </Navbar>
      </div>
    </ThemeProvider>
  );
}

export default MyNav;
