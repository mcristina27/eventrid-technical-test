import {  Button, Card, Col, Modal, Row } from "react-bootstrap";
import { meme } from "../interfaces/Meme";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import "../pages/main.css";
import axios from "axios";
import ModalShowMeme from "./ModalShowMeme";

interface memeProps {
  meme: meme;
  getMemeList: () => void;
}
const CardMeme: React.FC<memeProps> = ({ meme, getMemeList }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMemeDetails, setShowMemeDetails] = useState(false);

  const addLike = (meme: meme) => {
    try {
      axios
        .put(`http://localhost:3005/memes/${meme.id}`, {
          ...meme,
          likes: (meme.likes as number) + 1,
        })
        .catch((e) => console.error(e));
      getMemeList();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ModalShowMeme
        meme={meme}
        showModal={showMemeDetails}
        setShowModal={setShowMemeDetails}
      />
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`rounded-meme w-100 ${isHovered ? "card-hover" : ""}`}
      >
        <Card.Img
          onClick={() => setShowMemeDetails(true)}
          width={250}
          height={250}
          style={{ objectFit: "fill", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 0 }}
          variant="top"
          src={meme.imageUrl}
        />
        <Card.Body>
          <Card.Title>{meme.name}</Card.Title>
          <Row className="justify-center mb-2">
            <Col>
              <Button onClick={() => addLike(meme)}>
                <AiFillLike />
                {meme.likes}
              </Button>
              <Button className="mx-2" variant="secondary">
                <FaCommentAlt />
                {meme.comments?.length}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardMeme;
