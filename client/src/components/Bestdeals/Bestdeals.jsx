import React from "react";
import Card from "../Card/Card";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import v5 from "../../assets/v5.png";
import v6 from "../../assets/v6.png";
import "./Bestdeals.scss";

function Bestdeals() {
  return (
    <div className="bestdeals">
      <div className="title">
        <h1>Best Deals</h1>
        <h3>Just For You</h3>
      </div>
      <div className="row">
        <div className="col">
          <p>25%Off</p>
          <Card
            img={v1}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
        <div className="col">
          <p>25%Off</p>
          <Card
            img={v2}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
        <div className="col">
          <p>25%Off</p>
          <Card
            img={v3}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
        <div className="col hide">
          <p>25%Off</p>
          <Card
            img={v4}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
        <div className="col hide">
          <p>25%Off</p>
          <Card
            img={v5}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
        <div className="col hide">
          <p>25%Off</p>
          <Card
            img={v6}
            name="Refresher Mint"
            price="30000 MMK"
            discount="30000 MMK"
            point="600"
          />
        </div>
      </div>
      <button>
        <p>View More</p>
      </button>
    </div>
  );
}

export default Bestdeals;
