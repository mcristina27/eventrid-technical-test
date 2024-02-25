import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import axios from "axios";
import "./main.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    username: Yup.string().email("El campo debe ser un email  ").required('El campo es obligatorio'),
    password: Yup.string().required('El campo es obligatorio'),
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3005/users?email=${values.username}&password=${values.password}`
        );
        const search = data.filter((user: { email: string, password: string }) => user.email === values.username && user.password === values.password)
        if (search.length > 0) {
          toast.success('Bienvenido')
          localStorage.setItem('auth', 'true')
          navigate("meme-list");
        } else {
          toast.error('Credenciales inválidas')
        }
      } catch (error) {
        toast.error('Oops algo ocurrió')
      }
      setSubmitting(false)
      resetForm()
    }
  });

  return (
    <Container fluid>
      <Row className="min-vh-100 align-items-center justify-content-center">

        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
          <Image
            src={require("../assets/images/homer.png")}
            alt="login"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Form className="form-login" onSubmit={formik.handleSubmit}
          >
            <Row>
              <h4 className="text-center mb-4" style={{ color: "#333" }}>
                Bienvenido a Dev's Memes
              </h4>
            </Row>
            <Form.Group
              className="mb-3"
            >
              <Form.Label className="font-weight-bold">Correo electrónico</Form.Label>
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  placeholder="Username"
                  id="username"
                  type="email"
                  {...formik.getFieldProps('username')}
                  isValid={!formik.touched['username'] ? false : true}
                  isInvalid={!!formik.errors.username && formik.touched.username}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label className="font-weight-bold">Contraseña</Form.Label>
              <InputGroup size="sm" className="mb-3">
                <Form.Control
                  placeholder="************"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...formik.getFieldProps('password')}
                  isValid={!formik.touched['password'] ? false : true}
                  isInvalid={!!formik.errors.password && formik.touched.password}
                />
                <InputGroup.Text className="py-0 px-2">
                  <Button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn-password roundedCircle  p-0"
                  >
                    {showPassword ? (
                      <FaEyeSlash
                        className="icon-eye"
                        width={14}
                        height={14}
                      />
                    ) : (
                      <FaEye className="icon-eye" width={14} height={14} />
                    )}
                  </Button>
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </InputGroup>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    boxShadow: "4 4px 8px rgba(0,0,0,0.1)",
                    marginTop: "10%",
                  }}
                  className="col-md-10 justify-content-center align-items-center"
                >
                  Ingresar
                </Button>
              </div>
            </Form.Group>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
