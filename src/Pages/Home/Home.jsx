import React from "react";
import './style.scss'

/**
 * @components custom components
 */
import Navbar from "../../Components/Navbar";

import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home__container">
      <Helmet>
        <title>Escrow | Buy and Sell Tether Anonymously</title>
      </Helmet>
      <Navbar />

      <div className="home__container__banner">
        <h1>Buy & Sell Tether Anonymously!</h1>
        <p>Join the anonymousity.</p>
      </div>
    </div>
  );
}
