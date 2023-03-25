import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BizKimiz from "./components/NavbarComponents/BizKimiz";
import Sefler from "./components/NavbarComponents/Sefler";
import Medya from "./components/NavbarComponents/Medya";
import Rezervasyon from "./components/NavbarComponents/Rezervasyon";
import Etkinlik from "./components/NavbarComponents/Etkinlik";
import İletisim from "./components/İletisim";
import Kariyer from "./components/Kariyer";

import Gizlilik from "./components/Gizlilik";
import Menu from "./components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bizkimiz",
    element: <BizKimiz />,
  },
  {
    path: "/seflerimiz",
    element: <Sefler />,
  },
  {
    path: "/etkinlik",
    element: <Etkinlik />,
  },
  {
    path: "/medya",
    element: <Medya />,
  },
  {
    path: "/rezervasyon",
    element: <Rezervasyon />,
  },
  {
    path: "/iletisim",
    element: <İletisim />,
  },
  {
    path: "/kariyer",
    element: <Kariyer />,
  },
  {
    path: "/gizlilik",
    element: <Gizlilik />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "https://www.youtube.com/channel/UCc_aQ56OI4B-sjb4GbWBjQA?app=desktop",
    element: <Gizlilik />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
