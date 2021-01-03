import { React, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('https://mages-django-rest-api.herokuapp.com/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
     
const Login = ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

  return (
    <Container>
        <Row><Col>Login Page</Col></Row>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                    <Col>
                        <Form.Control placeholder="Username" onChange={e => setUserName(e.target.value)}/>
                    </Col>
            </Form.Row>
            <Form.Row>
                    <Col>
                        <Form.Control placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Form.Row>  
        </Form>
   
    </Container>
  );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default Login;


