import React from 'react'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'

export default function GoogleLogIn() {
  const googleAuthResponse = (response: any) => {
    axios
      .post(' http://localhost:5000/auth/google', {
        id_token: response.credential,
      })
      .then((response) => {
        console.log(response)
      })
  }
  return (
    <div>
      <GoogleLogin
        onSuccess={googleAuthResponse}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </div>
  )
}
