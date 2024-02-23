import { useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { meme } from "../interfaces/Meme";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import "./main.css";
import CardMeme from "../components/CardMeme";
import FabButton from "../components/FabButton";
import { colors } from "../theme/colors";

const MemeList = () => {
  const [memeList, setMemeList] = useState([]);
  useEffect(() => {
    return () => {
      getMemeList();
    };
  }, []);
  const getMemeList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3005/memes?_page=1&_limit=10`
      );
      setMemeList(data);
    } catch (error) {
      console.error("Error en la autenticación", error);
    }
  };
  return (
    <Container>
      <FabButton />
      <Row>
        <Navbar bg="light" >
          <Navbar.Brand
            className="justify-content-center align-items-center"
            href="#home"
          >
            Dev´s Memes
          </Navbar.Brand>
        </Navbar>
      </Row>
      <Row>
        {memeList.map((meme: meme, index) => (
          <Col xs={12} md={4} lg={3} className="p-2">
            <CardMeme meme={meme} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MemeList;
