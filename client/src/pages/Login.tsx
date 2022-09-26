import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'

import GoogleLogIn from '../components/GoogleLogIn'
import { userLogin } from '../redux/actions/user'
import { Footer } from '../components'

type FormData = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .post('http://localhost:5000/api/v1/users/login', data)
      .then((response) => {
        dispatch(userLogin(response.data))
        toast(`Hello ${response.data.firstName}`)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.data)
        if (error.response.data.message === `user ${data.email} not found`) {
          toast.error('No account is set up for this email. Please Signup')
          navigate('/register')
        } else if (error.response.data.message === 'password is incorrect') {
          toast.error('Wrong email or password. Please try again')
        } else {
          toast('Log in failed. Please try again')
        }
      })
  })

  return (
    <div className="layout login-page">
      <main className="main-container" >
      <div className="login-wrapper">
        <p className="login-title">Sign in</p>
        <Form onSubmit={onSubmit}>
          <div>
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
          <GoogleLogIn />
        </Form>
        <div className="login-actions-container">
          <a href="/register">
            <p className="p1">Don't have an account?</p>
            <p className="p2">Sign up</p>
          </a>
          <a href="/forgot-password">
            <p className="p3">Forgot your password</p>
          </a>
        </div>
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
