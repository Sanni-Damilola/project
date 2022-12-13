import React from "react";
import styled from "styled-components";
import img1 from "../Images/pos.jpg";

const More = () => {
  return (
    <Container>
      <Left>
        <h3>More Aout Our Business</h3>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis neque dolore rerum minus aperiam molestias, autem quas unde
          delectus debitis repellat dolorem eum sunt nesciunt ea harum
          exercitationem suscipit.
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis neque dolore rerum minus aperiam molestias, autem quas unde
          delectus debitis repellat dolorem eum sunt nesciunt ea harum
          exercitationem suscipit.
        </span>
      </Left>
      <Right>
        <Image src={img1} />
      </Right>
    </Container>
  );
};

export default More;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;

  @media screen and (max-width: 500px) {
    margin-left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-left: 0;
  }
  h3 {
    font-size: 35px;
    font-weight: 600;
    color: #ffffffb3;
    @media screen and (max-width: 500px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
    }
    @media screen and (max-width: 7680px) {
      padding-top: 60px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #ffffffb3;
    width: 80%;
    text-align: center;

    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: #1e2534;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
