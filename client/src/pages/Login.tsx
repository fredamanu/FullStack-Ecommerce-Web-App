import React, { useState } from 'react'
import axios from 'axios'
import GoogleIcon from '@mui/icons-material/Google'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
  const [data, setData] = useState()
  const handleLogin = async (e: any) => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    await axios
      .post('http://localhost:5000/api/v1/users/login', user)
      .then(function (response) {
        console.log(response.data)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data.message)
      })
  }
  return (
    <div>
      {data ? (
        <h1>Huraayyy!!! You are loggedin</h1>
      ) : (
        <div
          style={{
            width: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '70px',
          }}
        >
          <h1>Login</h1>
          <Row>
            <Col className="col-sm-8">
              <Card>
                <Card.Body>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm-4">
              <Card>
                <Card.Body>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    href="/auth/google"
                    role="button"
                  >
                    <GoogleIcon />
                    Sign In with Google
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}
