import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import GoogleIcon from '@mui/icons-material/Google'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Register() {
  const navigate = useNavigate()
  const handleRegister = async (e: any) => {
    e.preventDefault()
    const user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    await axios
      .post('http://localhost:5000/api/v1/user/register', user)
      .then(function (response) {
        console.log(response.data)
        if (response.data.isAuthenticated === true) {
          navigate('/order')
        } else {
          navigate('/login')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div
      style={{
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '70px',
      }}
    >
      <h1>Register</h1>
      <Row>
        <Col className="col-sm-8">
          <Card>
            <Card.Body>
              <Form onSubmit={handleRegister}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                    />
                  </Form.Group>
                </Row>
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
                  SignUp
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
  )
}
