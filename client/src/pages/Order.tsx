import React from 'react'
import axios from 'axios'

export default function Order() {
  const handleLogout = async () => {
    await axios
      .get('http://localhost:5000/api/v1/user/logout')
      .then(function (response) {
        console.log(response)
        // if (response.data.message === 'successfully loggedout') {
        //   navigate('/')
        // } else {
        //   navigate('/order')
        // }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div>
      <h1>Hurray ready to place an order</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
