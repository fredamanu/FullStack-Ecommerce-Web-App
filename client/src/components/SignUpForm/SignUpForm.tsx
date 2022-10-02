import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Paper, Divider } from '@mui/material'
import Form from 'react-bootstrap/Form'

import GoogleLogIn from '../../components/GoogleLogIn'
import { userLogin } from '../../redux/actions/user'
import toast from 'react-hot-toast'
import './SignUpForm.css'

type FormData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

const SignUpForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .post('http://localhost:5000/api/v1/users/register', data)
      .then((response) => {
        console.log(response)
        dispatch(userLogin(response.data))
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  })

  return (
    <Paper elevation={3} className="login-wrapper">
      <div>
        <p className="login-title">Sign up</p>
        <Form onSubmit={onSubmit}>
          <div>
            <div className="login-fields-container">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="login-inputs"
                type="text"
                {...register('firstName')}
              />
            </div>
            <div className="login-fields-container">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="login-inputs"
                type="text"
                {...register('lastName')}
              />
            </div>
            <div className="login-fields-container">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="login-inputs"
                type="email"
                // placeholder="Enter email"
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'You have entered an invalid email address!',
                  },
                })}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="login-fields-container">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="login-inputs"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Your password must be at least 8 characters',
                  },
                })}
              />
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <div className="login-btn-container">
            <button className="login-btn" type="submit">
              <input
                aria-label="submit"
                type="submit"
                value="Continue"
                className="submit"
              />
              Continue
            </button>
          </div>
          <Divider>Or</Divider>
          <GoogleLogIn />
        </Form>
        <div className="login-actions-container">
          <a href="/signin">
            <p className="p1">Already have an account?</p>
            <p className="p2">Sign in</p>
          </a>
        </div>
      </div>
    </Paper>
  )
}

export default SignUpForm
