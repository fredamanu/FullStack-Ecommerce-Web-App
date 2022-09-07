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
      .then((response) => {
        console.log(response)
        dispatch(userLogin(response.data))
        navigate('/')
      })
      .catch((error) => navigate('/login'))
  }

  return (
    <div className="login-btn-container">
      <GoogleLogin
        onSuccess={googleAuthResponse}
        onError={() => {
          console.log('Login Failed')
        }}
        width="300px"
      />
    </div>
    // <div className="login-btn-container">
    //   <button
    //     className="login-btn google-btn"
    //     type="submit"
    //     onClick={() => login()}
    //   >
    //     <span>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 512 512"
    //         height="24"
    //         width="24"
    //       >
    //         <path
    //           fill="#4285f4"
    //           d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
    //         ></path>
    //         <path
    //           fill="#34a853"
    //           d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
    //         ></path>
    //         <path
    //           fill="#fbbc02"
    //           d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
    //         ></path>
    //         <path
    //           fill="#ea4335"
    //           d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
    //         ></path>
    //       </svg>
    //     </span>
    //     <span className="google-btn-txt">Continue with Google</span>
    //   </button>
    // </div>
  )
}
