import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll";

const Foooter = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Sunday <br /> Business <br /> Space
        </Logo>
        <Copyright>
          <h4>CopyRight</h4>
          ©2022 <b>Sanni</b>, Inc. All rights reserved. Terms of use Privacy
          Policy
        </Copyright>
        <Contact>
          <h4>Contact</h4>
          sundayysanni@gmail.com <br />
          <b>0802434991</b>
        </Contact>
        <Social>
          <Icon>
            <AiFillFacebook />
          </Icon>
          <Icon>
            <AiFillTwitterSquare />
          </Icon>
          <Icon>
            <AiFillGoogleSquare />
          </Icon>
        </Social>
      </Wrapper>

      <Up offset={-100} smooth={true} duration={500} to="hero">
        <div>
          <HiArrowUp />
        </div>
      </Up>
    </Container>
  );
};

export default Foooter;

const Up = styled(Link)`
  padding: 16px 17px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #005eff;
  right: 1%;
  box-shadow: #005eff 0px 8px 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  position: fixed;
  bottom: 2%;

  @media screen and (max-width: 768px) {
    right: 3%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;
const Logo = styled.div`
  cursor: pointer;
  font-weight: bolder;
  font-size: 10px;
  text-align: center;
  font-family: serif;
  color: #005eff;
  border: 4px solid #005eff;
  padding: 2px;

  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 1px;
    font-size: 15px;
  }
`;
const Copyright = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  h4 {
    color: white;

    margin: 0%;
  }
`;
const Contact = styled.span`
  color: white;
  font-weight: 600;
  cursor: pointer;
  h4 {
    color: white;
    margin: 0%;
  }
  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005eff;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
  transition: all 360ms;
  :hover {
    color: white;
  }
`;
