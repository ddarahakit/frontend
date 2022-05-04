import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import styled, { css } from "styled-components";
import TopBanner from "../../components/Header/TopBanner";
import Paydetail from "./Paydetail";
import Payinfo from "./Payinfo";

function Payment() {
  const location = useLocation();
  const [isBannerShow, setIsBannerShow] = useState(true);

  return (
    <>
      {isBannerShow ? (
        <TopBanner
          isBannerShow={isBannerShow}
          setIsBannerShow={setIsBannerShow}
        />
      ) : (
        <></>
      )}
      <General isBannerShow={isBannerShow}>
        <Header isBannerShow={isBannerShow} />
        <Paydetail />
        <Payinfo data={location.state} />
        <Footer />
        <GoToTop />
      </General>
    </>
  );
}

const General = styled.div`
  position: relative;
  padding-top: 5.5rem;

  ${(props) =>
    props.isBannerShow &&
    css`
      margin-top: 55px;
    `}

  @media (min-width: 48em) {
    padding-top: 6.5rem;
  }
`;
export default Payment;
