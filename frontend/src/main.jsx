import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./layout/footer";
import MainPage from "./MainPage.jsx";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPage />
    <Footer />
  </StrictMode>
);
