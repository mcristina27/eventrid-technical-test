import { useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
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
import ModalAddMeme from "../components/ModalAddMeme";
import ModalShowMeme from "../components/ModalShowMeme";
import PaginationMeme from "../components/PaginationMeme";

const MemeList = () => {
  const [memeList, setMemeList] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(32);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMemeList();
  }, [itemsPerPage, pageNumber]);

  const getMemeList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3005/memes?_page=${pageNumber}&_limit=${itemsPerPage}`
      )
      //Añadí un reverse por qué no funciona el sort ni el order en el json-server como debería ser
      setMemeList(data.reverse());
    } catch (error) {
      console.error("Error", error);
    }
  };


  return (
    <Container className="p-4 "
    >
      <ModalAddMeme getMemeList={getMemeList} />
      <Row>
        <Col className="d-flex justify-content-start">
          <h1 className="primary">Dev´s Memes</h1>
        </Col>
      </Row >
      <Row>
        {memeList.map((meme: meme, index) => (
          <Col key={index} xs={12} md={4} lg={3} className="px-4  py-2 px-md-2 px-xs-2">
            <CardMeme getMemeList={getMemeList} meme={meme} />
          </Col>
        ))}
      </Row>
      {/* <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <PaginationMeme setPageNumber={setPageNumber} totalItems={30} itemsPerPage={itemsPerPage} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Row>
            <Col>
              <strong>Cantidad de memes</strong>
            </Col>
            <Col>
              <Form.Select aria-label="Items per page" value={itemsPerPage}
                className="mb-3"
                onChange={e => setItemsPerPage(Number(e.target.value) as number)}
              >
                {[4, 8, 12, 32].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row > */}
    </Container >
  );
};

export default MemeList;
