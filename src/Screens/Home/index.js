import React from "react";
import MessageImage from "../../assets/img/message.png";
import ButtomDownload from "../../Components/Button";
import { Container, Image, Text } from "./styles";

// import { Container } from './styles';

const Home = () => {
  return (
    <>
      <Container>
        <Image source={MessageImage} />
        <Text>Seja bem-vindo. Vamos baixar seu primeiro vídeo.</Text>
      </Container>
      <ButtomDownload />
    </>
  );
};

export default Home;
