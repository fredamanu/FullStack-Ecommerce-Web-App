import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'
import { userLogin } from '../redux/actions/user'

export default function GoogleLogIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const googleAuthResponse = (response: any) => {
    axios
      .post(' http://localhost:5000/auth/google', {
        id_token: response.credential,
      })
      .then((response: any) => {
        dispatch(userLogin(response.data))
        navigate('/')
      })
      .catch((error: any) => {
        console.log(error)
        navigate('/signin')
      })
  }

  return (
    <div className="login-btn-container">
      <GoogleLogin
        onSuccess={googleAuthResponse}
        onError={() => {
          console.log('Login Failed')
        }}
        width="350px"
      />
    </div>
  )
}
