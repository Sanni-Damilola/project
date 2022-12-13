import React from "react";
import styled from "styled-components";
import pos from "../Images/aboutpos.jpg";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";

const About = () => {
  return (
    <Container>
      <Up id="hero"></Up>
      <Down>
        <Wrapper>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>momo top up</span>
            <Icon>
              <FaRegCreditCard />
            </Icon>
          </Business>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
        </Wrapper>
      </Down>
    </Container>
  );
};

export default About;

const Container = styled.div``;

const Up = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${pos});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  ::after {
    content: "about us";
    position: absolute;
    z-index: 3;
    font-weight: bold;
    color: white;
    font-size: 100px;
    text-transform: capitalize;
  }
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid #005eff;
  margin-top: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 30px;

  justify-content: space-around;
  span {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 24px;
    color: rgb(0, 0, 0, 0.6);
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005eff;
  font-size: 20px;
  margin-left: 20px;
`;

const Business = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 360ms;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  :hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;
