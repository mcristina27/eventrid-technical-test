import { Suspense, lazy, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { meme } from "../interfaces/Meme";
import "./main.css";
import ModalAddMeme from "../components/ModalAddMeme";
import axios from "axios";

const MemeList = () => {
  const [memeList, setMemeList] = useState([]);
  const [itemsPerPage] = useState(32);
  const [pageNumber] = useState(1);
  const CardMeme = lazy(() => import("../components/CardMeme"));

  useEffect(() => {
    getMemeList();
  }, [itemsPerPage, pageNumber]);

  const getMemeList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3005/memes?_page=${pageNumber}&_limit=${itemsPerPage}`
      );
      //Añadí un reverse por qué no funciona el sort ni el order en el json-server como debería ser
      setMemeList(data.reverse());
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container className="p-4 ">
      <ModalAddMeme getMemeList={getMemeList} />
      <Row>
        <Col className="d-flex justify-content-start">
          <h1 className="primary">Dev´s Memes</h1>
        </Col>
      </Row>
      <Row>
        <Suspense fallback={<div>Loading...</div>}>
          {memeList.map((meme: meme, index) => (
            <Col
              key={index}
              xs={12}
              md={4}
              lg={3}
              className="px-4  py-2 px-md-2 px-xs-2"
            >
              <CardMeme getMemeList={getMemeList} meme={meme} />
            </Col>
          ))}
        </Suspense>
      </Row>
    </Container>
  );
};

export default MemeList;
