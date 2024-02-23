import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import axios from "axios";
import "./main.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:3005/users?email=${username}&password=${password}`
      );
      if (data.length > 0) {
        navigate("meme-list");
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error en la autenticación", error);
    }
  };

  return (
    <Container fluid>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={12} sm={6}>
          <div className="px-4 p-md-6  p-sm-4">
            <Form
              className="justify-content-center align-items-center"
              onSubmit={handleLogin}
            >
              <Col className="p-0" xs={12}>
                <h4 className="text-center mb-4" style={{ color: "#333" }}>
                  Login
                </h4>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo electrónico</Form.Label>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  </InputGroup>
                </Form.Group>
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
                    Login
                  </Button>
                </div>
              </Col>
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <Stack className="p-5 content-img justify-content-center align-items-center">
            <Image
              src={require("../assets/images/gatoLloron.jpg")}
              alt="placeholder"
              className="gatoLloron"
            />
          </Stack>
        </Col>
      </Row>
    </Container>
    // <Container fluid>
    //     <Row>
    //         <Col className="bg-primary  p-0" xs={6}>
    //             <Container
    //                 className="vh-100 col-md-6 d-flex justify-content-center align-items-center"
    //             >
    //                 <Form
    //                     className="box-form justify-content-center align-items-center"
    //                     onSubmit={handleLogin}
    //                 >
    //                     <Col className=" p-0" xs={12}>
    //                         <h4
    //                             className="text-center mb-4" style={{ color: '#333' }}
    //                         >
    //                             Login
    //                         </h4>
    //                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                             <Form.Label>Email address</Form.Label>
    //                             <Form.Control type="email" placeholder="name@example.com" />
    //                         </Form.Group>
    //                         <Form.Group controlId="formBasicPassword">
    //                             <Form.Label>Password</Form.Label>
    //                             <InputGroup>
    //                                 <FormControl
    //                                     type={showPassword ? 'text' : 'password'}
    //                                     placeholder="Password"
    //                                     aria-label="Password"
    //                                     aria-describedby="basic-addon2"
    //                                 />
    //                                 <InputGroup size="sm" className="mb-3">

    //                                     <Form.Control
    //                                         aria-label="Small"
    //                                         aria-describedby="inputGroup-sizing-sm"
    //                                     />
    //                                     <InputGroup.Text id="inputGroup-sizing-sm">
    //                                         <Button onClick={toggleShowPassword}>
    //                                             {showPassword ? <FaEye /> : <FaEyeSlash />}
    //                                         </Button>
    //                                     </InputGroup.Text>
    //                                 </InputGroup>
    //                             </InputGroup>
    //                         </Form.Group>
    //                         <div className="d-flex justify-content-center" >
    //                             <Button
    //                                 variant="primary"
    //                                 type="submit"
    //                                 style={{
    //                                     boxShadow: '4 4px 8px rgba(0,0,0,0.1)',
    //                                     marginTop: "10%"
    //                                 }}
    //                                 className="col-md-10 justify-content-center align-items-center"
    //                             >
    //                                 Login
    //                             </Button>
    //                         </div>
    //                     </Col>

    //                 </Form>
    //             </Container>
    //         </Col>
    //         <Col className="bg-secondary  align-self-center text-center" xs={6}>
    //             <img className='img-bg' src={require("../assets/images/gatoLloron.jpg")} alt="" />

    //         </Col>
    //     </Row>
    // </Container>
    // <div className='row d-flex justify-content-center align-items-center'>
    //     <div className='vh-100 col-md-6 d-flex justify-content-center align-items-center'>

    //         <img className='img-bg' src={require("../assets/images/gatoLloron.jpg")} alt="" />
    //     </div>

    //     <div  className="d-none d-md-block col-md-6 d-flex justify-content-center align-items-center">F

    //         <div className='box-right-content'>

    //             <div className='box'>
    //                 adsasdsaijdasdsa
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <div
    //     className="row d-flex justify-content-center align-items-center"
    //     style={{ backgroundColor: colors.bg, minHeight: '100vh' }} >

    //     {/* <div
    //         className="col-md-6 d-flex box-form"
    //     > */}
    //         <div className='box-form-c w-100 col-md-6'>
    //             <Form
    //                 className="col-md-10 justify-content-center align-items-center"
    //                 onSubmit={handleLogin}
    //             >

    //                 <h4
    //                     className="text-center mb-4" style={{ color: '#333' }}
    //                 >
    //                     Login
    //                 </h4>
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Email address"
    //                     style={{
    //                         fontSize: '12px',
    //                         color: '#555'
    //                     }}
    //                 >
    //                     <Form.Control
    //                         size={'sm'}
    //                         type="email"
    //                         placeholder="name@example.com" />

    //                 </FloatingLabel>
    //                 <FloatingLabel
    //                     controlId="floatingPassword"
    //                     label="Password"
    //                     style={{
    //                         marginTop: "5%",
    //                         fontSize: '1rem',
    //                         color: '#555'
    //                     }}>
    //                     <Form.Control
    //                         type="password"
    //                         placeholder="Password" />
    //                 </FloatingLabel>
    //                 <div className="d-flex justify-content-center" >
    //                     <Button
    //                         variant="primary"
    //                         type="submit"
    //                         style={{
    //                             boxShadow: '4 4px 8px rgba(0,0,0,0.1)',
    //                             marginTop: "10%"
    //                         }}
    //                         className="col-md-10 justify-content-center align-items-center"
    //                     >
    //                         Login
    //                     </Button>
    //                 </div>
    //             </Form>
    //         {/* </div> */}
    //     </div>
    //     <div
    //         className="d-none d-md-block col-md-6 d-flex text-center p-5 content-img justify-content-center align-items-center"
    //     >
    //         <img src={require("../assets/images/gatoLloron.jpg")} alt="placeholder" className="gatoLloron" />
    //     </div>
    // </div >
  );
};

export default Login;
