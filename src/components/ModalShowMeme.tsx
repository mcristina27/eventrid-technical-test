import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import "../pages/main.css";
import { meme } from "../interfaces/Meme";

interface memeProps {
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  meme: meme;
}
const ModalShowMeme: React.FC<memeProps> = ({
  meme,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-from-bottom"
        aria-labelledby="modal-styling-title"
      >
        <Modal.Header closeButton>
          <Card.Title>{meme.name}</Card.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          <Card className="w-100 border-0">
            <Card.Img
              width={200}
              height={300}
              variant="top"
              style={{ objectFit: "fill", borderRadius: 20, padding: 0 }}
              src={meme.imageUrl}
            />
            <Card.Body>
              <Card.Text>{meme.description}</Card.Text>
            </Card.Body>
            {meme.comments &&
              meme.comments?.length > 0 &&
              meme.comments.map((comment, index) => (
                <Card key={index} className="mb-3 border-0">
                  <Card.Body>
                    <Row>
                      <Col
                        xs={2}
                        md={1}
                        className="d-flex align-items-center justify-content-center pl-2"
                      >
                        <img
                          src={
                            "https://stickerly.pstatic.net/sticker_pack/R1vDFbKpUzAqkrTcZGmoag/KZ58GI/2/29eea077-e1f4-4251-98af-e9fc6990ee21.png"
                          }
                          alt="Avatar"
                          style={{
                            marginLeft: 15,
                            width: "60px",
                            height: "60px",
                            borderRadius: 20,
                          }}
                        />
                      </Col>
                      <Col xs={10} md={11} className="px-3">
                        <Card.Text>{comment}</Card.Text>
                        <Button variant="outline-primary" size="sm">
                          Me gusta
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalShowMeme;
