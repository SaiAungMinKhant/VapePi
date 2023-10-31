import React from "react";
import Header from "../components/Header/Header";
import Bestdeals from "../components/Bestdeals/Bestdeals";
import Member from "../components/Member/Member";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

function homepage() {
  return (
    <div>
      <Header />
      <Bestdeals />
      <Member />
      <Products />
      <Footer />
    </div>
  );
}

export default homepage;
