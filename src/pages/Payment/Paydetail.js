import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function Paydetail() {
  return (
    <PaydetailWrapper>
      <PaydetailInfo></PaydetailInfo>
    </PaydetailWrapper>
  );
}

const PaydetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 48em) {
    flex-direction: row;
  }
`;

const PaydetailWrapper = styled.div`
  width: 90%;
  max-width: 100rem;
  margin: 0 auto;
`;
export default Paydetail;
