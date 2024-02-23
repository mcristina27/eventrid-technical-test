import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { meme } from "../interfaces/Meme";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

interface memeProps {
  meme: meme;
}
const CardMeme: React.FC<memeProps> = ({ meme }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        width={300}
        height={300}
        style={{ objectFit: "contain" }}
        variant="top"
        className="p-2"
        src={require("../assets/images/" + meme.imageUrl)}
      />
      <Card.Body>
        <Card.Title>{meme.name}</Card.Title>
        <Card.Text>{meme.description}</Card.Text>
        <Row className="justify-center mb-2">
          <Col>
            <Badge bg="primary" pill>
              <AiFillLike />
              {meme.likes}
            </Badge>
            <Badge bg="secondary" pill>
              <FaCommentAlt />
              {meme.likes}
            </Badge>
          </Col>
        </Row>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default CardMeme;
