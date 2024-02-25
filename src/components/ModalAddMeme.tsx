import { Button, Card, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "../pages/main.css";
import FabButton from "./FabButton";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { meme } from "../interfaces/Meme";
import axios from "axios";
import FullPageLoader from "./FullPageLoader";
import toast, { Toaster } from "react-hot-toast";

interface memeProps {
  getMemeList: () => void
}
const ModalAddMeme: React.FC<memeProps> = ({ getMemeList }) => {
  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('El campo es obligatorio'),
    description: Yup.string().required('El campo es obligatorio'),
    imageUrl: Yup.string().required('El campo es obligatorio'),
  });
  const formik = useFormik<meme>({
    initialValues: {
      name: '',
      imageUrl: '',
      description: '',
      likes: 0,
      comments: []
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { data } = await axios.post(
          `http://localhost:3005/memes`,
          values
        );
        getMemeList()
        toast.success('Registro exitoso')
      } catch (error) {
        toast.error('Oops algo ocurrió')
      }
      setSubmitting(false)
      setShowModal(false)
      resetForm()
    }
  });

  return (
    <>
      {<FullPageLoader /> && formik.isSubmitting}
      <FabButton setShowModal={setShowModal} />
      <Toaster />
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        bsSize="small"
      >
        <Modal.Header closeButton>
          <Modal.Title>Registra tu meme</Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="name">Nombre
              </FormLabel>
              <FormControl
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
                isValid={!formik.touched['name'] ? false : true}
                isInvalid={!!formik.errors.name && formik.touched.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="description">Descripción
              </FormLabel>
              <FormControl
                id="description"
                type="text"
                {...formik.getFieldProps('description')}
                isValid={!formik.touched['description'] ? false : true}
                isInvalid={!!formik.errors.description && formik.touched.description}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="imageUrl">Imagen URL
              </FormLabel>
              <FormControl
                id="imageUrl"
                type="text"
                {...formik.getFieldProps('imageUrl')}
                isValid={!formik.touched['imageUrl'] ? false : true}
                isInvalid={!!formik.errors.imageUrl && formik.touched.imageUrl}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.imageUrl}
              </Form.Control.Feedback>
              {formik.values.imageUrl &&
                <Card.Img
                  width={200}
                  height={300}
                  variant="top"
                  style={{ objectFit: "fill", borderRadius: 20, padding: 0, marginTop: 10 }}
                  src={formik.values.imageUrl}
                />
              }
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type={'submit'} variant="primary" disabled={formik.isSubmitting}>Guardar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default ModalAddMeme;
