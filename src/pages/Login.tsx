import { Box, Input, Stack, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';
import { colors } from '../theme/colors';

const Login = () => {

    useEffect(() => {
        const login = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3005/users?email=usuario@example.com&password=contraseña`);
                if (data.length > 0) {
                    // alert('Autenticación exitosa');
                } else {
                    // alert('Credenciales inválidas');
                }
            } catch (error) {
                console.error('Error en la autenticación', error);
            }
        }
        return () => {
            login()
        }

    }, [])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }

    return (

        <div
            className="row d-flex justify-content-center align-items-center"
            style={{ backgroundColor: colors.bg, minHeight: '100vh' }} >

            <div
                className="vh-100 col-md-6 d-flex justify-content-center align-items-center"
                style={{
                    backgroundColor: colors.container,
                }}>
                <Form
                    style={{
                        backgroundColor: colors.bg,
                        borderRadius: '28px',
                        padding: '30px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        width: '70%',
                        height: '70%',
                    }}
                    className="col-md-10 justify-content-center align-items-center"
                    onSubmit={handleLogin}
                >

                    <h4
                        className="text-center mb-4" style={{ color: '#333' }}
                    >
                        Login
                    </h4>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        style={{
                            fontSize: '12px',
                            color: '#555'
                        }}
                    >
                        <Form.Control
                            size={'sm'}
                            type="email"
                            placeholder="name@example.com" />
                            
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        style={{
                            marginTop: "5%",
                            fontSize: '1rem',
                            color: '#555'
                        }}>
                        <Form.Control
                            type="password"
                            placeholder="Password" />
                    </FloatingLabel>
                    <div className="d-flex justify-content-center" >
                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                boxShadow: '4 4px 8px rgba(0,0,0,0.1)',
                                marginTop: "10%"
                            }}
                            className="col-md-10 justify-content-center align-items-center"
                        >
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <div
                className="d-none d-md-block col-md-6 d-flex justify-content-center align-items-center"
                style={{ backgroundColor: colors.bg }}>
                <img src={require("../assets/images/gatoLloron.jpg")} alt="placeholder" className="gatoLloron" />
            </div>
        </div >

    );
}


export default Login;