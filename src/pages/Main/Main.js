import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import styled from "styled-components";

function Main() {
  return (
    <General>
      <Header />
      <Footer />
      <GoToTop />
    </General>
  );
}

const General = styled.div`
  position: relative;
  padding-top: 5.5rem;
  @media (min-width: 48em) {
    padding-top: 6.5rem;
  }
`;

export default Main;
