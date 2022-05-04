import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function Payinfo(props) {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp72573626"); // 가맹점 식별코드 // 결제 데이터 정의
    const data = {
      pg: "html5_inicis", // PG사 (필수항목)
      pay_method: "card", // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
      name: "결제 테스트", // 주문명 (필수항목)
      amount: props.data.price, // 금액 (필수항목)
      custom_data: { name: "부가정보", desc: "세부 부가정보" },
      buyer_name: "심준보", // 구매자 이름
      buyer_tel: "01077456981", // 구매자 전화번호 (필수항목)
      buyer_email: "ddarahakit@gmail.com", // 구매자 이메일
      buyer_addr: "주소",
      buyer_postalcode: "우편번호", // ....
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };
  return (
    <PayinfoFormWrapper>
      <PayinfoForm>
        <PayinfoFormPartOne>
          <PaymentInfo>
            <PaymentInfoTitle>결제 수단</PaymentInfoTitle>
            <PaymentInfoWrapper>
              <PaymentInfoBox>
                <PaymentTypeForm className="selected">
                  <PaymentTypeFormCheck>
                    <PaymentTypeFormCheckImg
                      alt="card registration check"
                      src="https://www.codeit.kr/static/images/register/check--navy.png"
                    />
                  </PaymentTypeFormCheck>
                  <img
                    alt="payment registration check"
                    src="https://www.codeit.kr/static/images/register/paymentType_CARD--selected.png"
                  />
                  <p>국내 간편 결제</p>
                </PaymentTypeForm>
                <PaymentCard>
                  <PaymentCardFormNumber>
                    <PaymentCardFormTitle>카드번호</PaymentCardFormTitle>
                    <PaymentCardFormBox>
                      <PaymentCardFormBoxEach>
                        <PaymentCardNumber>
                          <input
                            type="number"
                            id="PaymentCardNumber__0"
                            autoComplete="off"
                            placeholder="1234"
                          />
                          <input
                            type="number"
                            id="PaymentCardNumber__1"
                            autoComplete="off"
                            placeholder="1234"
                            className="pw"
                          />

                          <input
                            type="number"
                            id="PaymentCardNumber__2"
                            autoComplete="off"
                            placeholder="1234"
                            className="pw"
                          />

                          <input
                            type="number"
                            id="PaymentCardNumber__3"
                            autoComplete="off"
                            placeholder="1234"
                          />
                        </PaymentCardNumber>
                      </PaymentCardFormBoxEach>
                    </PaymentCardFormBox>
                  </PaymentCardFormNumber>
                  <PaymentCardFormPassword>
                    <PaymentCardFormTitle>
                      비밀번호 앞 2자리
                    </PaymentCardFormTitle>
                    <PaymentCardFormBox>
                      <PaymentCardFormBoxEach>
                        <PaymentCardPassword>
                          <input
                            type="password"
                            autoComplete="off"
                            placeholder="••"
                            id="PaymentCardPassword"
                          />

                          <input autoComplete="off" disabled="" value="••" />
                        </PaymentCardPassword>
                      </PaymentCardFormBoxEach>
                    </PaymentCardFormBox>
                  </PaymentCardFormPassword>
                  <PaymentCardFormExp>
                    <PaymentCardFormTitle>유효기간</PaymentCardFormTitle>
                    <PaymentCardFormBox>
                      <PaymentCardFormBoxEach>
                        <PaymentCardExp>
                          <input
                            type="number"
                            autoComplete="off"
                            id="InputExpDate-0"
                            placeholder="MM"
                          />
                          <span>/</span>
                          <input
                            type="number"
                            autoComplete="off"
                            id="InputExpDate-1"
                            placeholder="YY"
                          />
                        </PaymentCardExp>
                      </PaymentCardFormBoxEach>
                    </PaymentCardFormBox>
                  </PaymentCardFormExp>
                  <PaymentCardFormSec>
                    <PaymentCardFormTitle>생년월일 6자리</PaymentCardFormTitle>
                    <PaymentCardFormBox>
                      <PaymentCardFormBoxEach>
                        <PaymentCardSec>
                          <input
                            type="number"
                            id="PaymentCardSecurityNumber"
                            autoComplete="off"
                            placeholder="950101"
                          />
                        </PaymentCardSec>
                      </PaymentCardFormBoxEach>
                    </PaymentCardFormBox>
                  </PaymentCardFormSec>
                  <PaymentCardAgreement>
                    <PaymentCardAgreementCheckbox>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 67 67"
                      >
                        <g>
                          <g>
                            <rect
                              x="1"
                              y="1"
                              width="65"
                              height="65"
                              rx="16"
                              ry="16"
                              fill="transparent"
                            ></rect>
                            <path
                              fill="transparent"
                              d="M30,50.48a4,4,0,0,1-2.71-1.07L10.07,33.65a3.69,3.69,0,0,1-.37-4.94,3.11,3.11,0,0,1,4.59-.4L29.92,42.6,52.4,15.68a3.1,3.1,0,0,1,4.6-.27,3.68,3.68,0,0,1,.24,4.94L33.64,48.62A4.8,4.8,0,0,1,30,50.48Z"
                            ></path>
                            <rect
                              x="1"
                              y="1"
                              width="65"
                              height="65"
                              rx="16"
                              ry="16"
                              stroke="#69666d"
                              fill="#ffffff"
                            ></rect>
                          </g>
                        </g>
                      </svg>
                    </PaymentCardAgreementCheckbox>
                    <a>결제사 정보 제공</a>동의
                  </PaymentCardAgreement>
                </PaymentCard>
              </PaymentInfoBox>
            </PaymentInfoWrapper>
          </PaymentInfo>
        </PayinfoFormPartOne>
        <PayinfoFormPartTwo>
          <PaymentInfoTitle>결제 정보</PaymentInfoTitle>
          <PaymentInfoPrice>
            <div>
              <PaymentInfoPriceSection className="discount">
                <PaymentInfoPriceInfo className="original">
                  <p>
                    {props.data.title
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p>
                    {props.data.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </p>
                </PaymentInfoPriceInfo>

                <PaymentInfoPriceInfo className="discount">
                  <div>할인 금액</div>
                  <p>{props.data.discount}</p>
                  <p>(-0) 원</p>
                </PaymentInfoPriceInfo>
              </PaymentInfoPriceSection>
              <PaymentInfoPriceFinal>
                <PaymentInfoPriceFinalTitle>
                  최종 결제 금액
                </PaymentInfoPriceFinalTitle>
                <PaymentInfoPriceFinalPrice>
                  {props.data.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span>원</span>
                </PaymentInfoPriceFinalPrice>
              </PaymentInfoPriceFinal>
              <PaymentInfoPriceFinalButtonWrapper>
                <PaymentInfoPriceFinalButton
                  type="button"
                  onClick={onClickPayment}
                >
                  <span>지금 시작하기</span>
                </PaymentInfoPriceFinalButton>
              </PaymentInfoPriceFinalButtonWrapper>
            </div>
          </PaymentInfoPrice>
        </PayinfoFormPartTwo>
      </PayinfoForm>
    </PayinfoFormWrapper>
  );
}

const PaymentInfoPriceFinalButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: transparent;
  box-shadow: 0 0.5rem 1.5rem 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  border-radius: 1.5rem;
  background-image: linear-gradient(274deg, #710ad2, #8e43e6);
  color: #fff;
  text-align: center;
  font-weight: 500;

  @media (min-width: 48em) {
    font-size: 2rem;
    padding: 1.4rem 7rem;
  }
  @media (min-width: 62em) {
    padding: 1.7rem 7rem;
  }

  span {
    transition: transform 0.1s ease-out;
    position: relative;
    z-index: 2;
    display: inline-block;
    transform: translateY(-0.3em);
  }
  &:before {
    transition: top 0.1s ease-out;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: -0.6rem;
    left: 0;
    content: "";
    background-image: linear-gradient(274deg, #8400ff, #a25df4);
    border-radius: 1.5rem;
  }
`;
const PaymentInfoPriceFinalButtonWrapper = styled.div`
  width: 100%;
  display: inline-block;

  @media (min-width: 48em) {
    width: 32.6rem;
  }

  @media (min-width: 62em) {
    width: 100%;
  }
`;
const PaymentInfoPriceFinalPrice = styled.p`
  font-size: 2.5rem;
  letter-spacing: -0.38px;
  text-align: right;
  color: #6500c3;

  span {
    font-size: 1.8rem;
  }

  @media (min-width: 48em) {
    text-align: left;
  }

  @media (min-width: 62em) {
    text-align: right;
  }
`;
const PaymentInfoPriceFinalTitle = styled.p`
  margin-bottom: -0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #333236;

  @media (min-width: 48em) {
    margin-bottom: 1.4rem;
  }

  @media (min-width: 62em) {
    margin-bottom: -0.5rem;
  }
`;
const PaymentInfoPriceFinal = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 3.3rem;
  letter-spacing: -0.24px;

  @media (min-width: 48em) {
    width: 50%;
    margin-bottom: 0;
  }

  @media (min-width: 62em) {
    width: 100%;
    margin-bottom: 3.3rem;
  }
`;

const PaymentInfoPriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  letter-spacing: -0.24px;
  color: #6a666e;
  &.original {
    margin-bottom: 1.8rem;
  }
  &.discount {
    font-weight: 500;
  }
`;

const PaymentInfoPriceSection = styled.div`
  padding: 2.4rem 0;
  &.discount {
    padding: 2rem 0 2.4rem rem;
  }
`;

const PaymentInfoPrice = styled.div`
  margin-bottom: 3.2rem;
  @media (min-width: 48em) {
    margin-bottom: 3.1rem;
  }
`;
const PaymentCardAgreementCheckbox = styled.label`
  cursor: pointer;
  line-height: 1;

  svg {
    width: 1.7rem;
    height: 1.6rem;
    vertical-align: middle;
    margin-top: -0.2rem;
    border-radius: 0.3rem;
    overflow: hidden;
  }
`;

const PaymentCardAgreement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: auto;
  font-size: 1.5rem;
  font-weight: 500;
  color: #69666d;

  a {
    cursor: pointer;
    text-decoration: underline;
    margin: 0 0.25em;
  }
`;

const PaymentCardSec = styled.div``;

const PaymentCardExp = styled.div`
  input:first-child {
    text-align: right;
  }

  span {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    color: #a9abb7;
  }
`;

const PaymentCardPassword = styled.div`
  display: flex;
  justify-content: left;

  input {
    width: 2rem;
    letter-spacing: 0.125rem;
    font-family: Verdana, serif;
  }
`;

const PaymentCardNumber = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const PaymentCardFormBoxEach = styled.div`
  flex-grow: 1;
  text-align: left;

  input {
    font-size: 1.5rem;
    color: #343236;
    border: none;
  }
`;

const PaymentCardFormBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.9rem 1.1rem;
  border: 0.1rem solid #d8d8d8;
  transition: 0.25s ease-in-out;
  height: 4.2rem;
`;

const PaymentCardFormTitle = styled.div`
  padding-left: 0.5rem;
  margin-bottom: 0.9rem;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #333236;
`;

const PaymentCardForm = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 48em) {
    margin-bottom: 3rem;
  }

  input {
    padding: 0.5rem 0;
    margin: -0.5rem 0;

    &.pw {
      -webkit-text-security: disc;
      -moz-text-security: disc;
      -ms-text-security: disc;
      -o-text-security: disc;
      letter-spacing: 0.125rem;
      font-family: Verdana, serif;
    }
  }
`;

const PaymentCardFormNumber = styled(PaymentCardForm)`
  @media (min-width: 48em) {
    width: 61%;
  }

  input {
    width: 4.5rem;
  }
`;

const PaymentCardFormPassword = styled(PaymentCardForm)`
  @media (min-width: 48em) {
    width: 33%;
  }
`;

const PaymentCardFormExp = styled(PaymentCardForm)`
  input {
    width: 2.4rem;
  }
  @media (min-width: 48em) {
    width: 33%;
  }
`;

const PaymentCardFormSec = styled(PaymentCardForm)`
  @media (min-width: 48em) {
    width: 65%;
  }
`;

const PaymentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 4rem 5rem;
  @media (min-width: 48em) {
    padding: 1.5rem 6.6rem 5rem;
  }
`;

const PaymentTypeFormCheckImg = styled.img`
  display: none;
  width: 1.2rem;
  height: 1rem;
`;
const PaymentTypeFormCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1.3rem;
  border-radius: 100%;
  border: 0.1rem solid #a9abb7;
  background-color: #fff;
  cursor: pointer;
`;

const PaymentTypeForm = styled.div`
  display: flex;
  align-items: center;
  padding: 1.9rem 2.7rem;
  border-top: 0.1rem solid #edeef4;

  > p {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: -0.34px;
    color: #a8abb8;
  }

  &:first-child {
    border-top: none;
  }

  &.selected {
    border-bottom: 0.1rem solid #edeef4;
    @media (min-width: 48em) {
      border-bottom: none;
    }

    ${PaymentTypeFormCheck} {
      border: 0.1rem solid #9c00ff;
    }

    ${PaymentTypeFormCheckImg} {
      display: block;
    }

    p {
      color: #343236;
    }
  }

  > img {
    width: 3.3rem;
    height: 3.3rem;
    margin-right: 1rem;
  }
`;

const PaymentInfoBox = styled.div`
  box-shadow: 0 0.2rem 1.1rem 0 rgb(67 83 91 / 5%);
  border: 0.1rem solid #edeef4;
  background-color: #fff;
`;

const PaymentInfoWrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fff;
`;

const PaymentInfoTitle = styled.p`
  margin-left: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.27px;
  color: #101010;

  @media (min-width: 48em) {
    font-size: 2rem;
    letter-spacing: -0.3px;
  }
`;

const PaymentInfo = styled.div``;

const PayinfoFormPartTwo = styled.div`
  width: 94%;
  margin: 0 auto;

  @media (min-width: 62em) {
    width: 34%;
    margin: initial;
  }
`;

const PayinfoFormPartOne = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 62em) {
    margin-bottom: 0;
    width: 59%;
  }
`;

const PayinfoForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 100rem;
  margin: 0 auto;

  @media (min-width: 62em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PayinfoFormWrapper = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 6rem;
  margin-top: 4rem;
  background-color: #f9f8fb;
  border-top: 0.1rem solid #eeecf2;

  @media (min-width: 48em) {
    padding-top: 6.5rem;
    padding-bottom: 8.5rem;
    margin-top: 8.5rem;
  }

  @media (min-width: 62em) {
    padding-top: 10rem;
    padding-bottom: 14.3rem;
    margin-top: 12rem;
  }
`;

export default Payinfo;
