import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  const [show, setshow] = React.useState(false);

  const click = () => {
    setshow(!show);
  };

  const remove = () => {
    setshow(false);
  };

  return (
    <Container>
      <Wrapper>
        <Logo to={"/"}>
          <h6>
            Sunday <br /> Business <br /> Space
          </h6>
        </Logo>
        <Navwrapper>
          <Nav to={"/"}>home</Nav>
          <Nav to={"/about"}>about</Nav>
          <Nav to={"/service"}>service</Nav>
          <Nav to={"/contact"}>contact</Nav>
        </Navwrapper>
        <Buttonwrapper>
          <Button color="value" border="" background="value" to={"/signup"}>
            sign up
          </Button>
          <Button color="" border="value" background="" to={"/signin"}>
            {" "}
            sign in
          </Button>
        </Buttonwrapper>
        <Menu onClick={click}>
          {show ? (
            <span>X</span>
          ) : (
            <Icon>
              <BsThreeDots />
            </Icon>
          )}
        </Menu>
        {show ? (
          <Handbugger>
            <Nav to={"/"}>home</Nav>
            <Nav to={"/about"}>about</Nav>
            <Nav to={"/service"}>service</Nav>
            <Nav to={"/contact"}>contact</Nav>
            <Button color="value" border="" background="value" to={"/signup"}>
              sign up
            </Button>
            <Button color="" border="value" background="" to={"/signin"}>
              {" "}
              sign in
            </Button>
          </Handbugger>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Handbugger = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    background-color: white;
    position: absolute;
    top: 0;
    width: 50%;
    left: 0;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    background-color: white;
    position: absolute;
    top: 0;
    width: 50%;
    left: 0;
    height: 100vh;
    flex-direction: column;
  }
`;

const Menu = styled.div`
  display: none;
  border-radius: 50%;
  border: 1px solid #005eff;

  @media screen and (max-width: 500px) {
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  transition: all 360ms;
  :hover {
    outline: 1px solid #005eff;
  }

  span {
    font-weight: bold;
    font-size: 27px;
    color: #005eff;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005eff;
  font-size: 23px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  h6 {
    cursor: pointer;
    font-weight: bolder;
    font-size: 19px;
    text-align: center;
    font-family: serif;
    color: #005eff;
    border: 4px solid #005eff;
    padding: 3px;

    @media screen and (max-width: 500px) {
      padding: 1px;
      font-size: 15px;
    }
    @media screen and (max-width: 768px) {
      padding: 1px;
      font-size: 15px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  justify-content: space-between;
`;
const Navwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled(NavLink)`
  text-decoration: none;
  margin-left: 80px;
  font-size: 17px;
  color: white;
  font-weight: 600;
  text-transform: capitalize;
  background-image: linear-gradient(
    transparent 0%,
    transparent 10%,
    #005eff 90%,
    #005eff 100%
  );
  transition: all 360ms;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 0 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(0, 0, 0, 0.6);
  }
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(0, 0, 0, 0.6);
  }

  :hover {
    background-size: 100% 100%;
  }
`;
const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled(NavLink)<{
  color: string;
  background: string;
  border: string;
}>`
  text-decoration: none;
  border: 1px solid
    ${({ border }) => (border ? "rgb(0, 0, 0, 0.5)" : "transparent")};
  padding: 6px 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 13px;
  transition: all 300ms;
  :hover {
    outline: 1.5px solid black;
  }

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

  color: ${({ color }) => (color ? "white" : "rgb(0, 0, 0, 0.8)")};
  background-color: ${({ background }) => (background ? "#005eff" : "white")};
`;
const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e2534;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
