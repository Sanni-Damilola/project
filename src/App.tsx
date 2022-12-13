import React from "react";
import styled from "styled-components";
import Foooter from "./Component/Footer/Foooter";
import Header from "./Component/Header/Header";
import Allroutes from "./Component/Routes/Allroutes";

function App() {
  // const fun = () => {
  //   let value = ["block", "none"];
  //   let nee = value[value % value.length];
  //   return nee;
  // };

  return (
    <Container dp={""}>
      <Header />
      <Allroutes />
      <Foooter />
    </Container>
  );
}

export default App;

const Container = styled.div<{ dp: any }>`
  display: ${(dp) => dp.dp};
`;
