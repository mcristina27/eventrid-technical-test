import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "../pages/main.css";
const FabButton = () => {
  return (
    <div className="btn-fab">
      <Button variant="primary" className="btn-circule">
        <FaPlus />
      </Button>
    </div>
  );
};
export default FabButton;
