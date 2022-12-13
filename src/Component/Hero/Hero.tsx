import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../Images/phone.jpg";

const Hero = () => {
  return (
    <Container id="hero">
      <h2>Hello,</h2>
      <p>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Aperiam
        voluptatem perspiciatis vitae
      </p>
      <span>
        Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit.
        Sapiente, cupiditate possimus quis pariatur <br /> impedit dolorum
        sequi. Possimus corporis vitae laboriosam cumque. Inventore dicta,
        voluptas eaque possimus ab provident quidem error?
      </span>
      <Button to={"/signup"}>Get Started</Button>
    </Container>
  );
};

export default Hero;

const Button = styled(NavLink)`
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
  transition: all 300ms;
  :hover {
    transform: scale(0.9);
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
  }
  align-self: center;
  background-color: #005eff;
  z-index: 2;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
  }
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h2 {
    z-index: 1;
    font-size: 45px;
    font-weight: bold;
    margin: 0;
    color: white;
  }

  p {
    color: white;
    z-index: 1;
    font-weight: 500;
    font-size: 17px;

    @media screen and (max-width: 500px) {
      font-size: 14px;
      width: 85%;
    }
  }

  span {
    color: white;
    z-index: 1;
    font-weight: 500;
    font-size: 17px;
    @media screen and (max-width: 500px) {
      font-size: 14px;
      width: 85%;
    }
  }
`;
