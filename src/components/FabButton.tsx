import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "../pages/main.css";
import ModalMeme from "./ModalAddMeme";
import { useState } from "react";

interface FabButtonProps {
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}
const FabButton: React.FC<FabButtonProps> = ({ setShowModal }) => {
  return (
    <>
      <div className="btn-fab">
        <Button type="button" variant="primary" className="btn-circule" onClick={() => setShowModal(true)}>
          <FaPlus />
        </Button>
      </div>
    </>
  );
};
export default FabButton;
