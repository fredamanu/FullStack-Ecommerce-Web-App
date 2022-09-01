import React, { useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

export default function CheckOut() {
  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get('http://localhost:5000/api/v1/users')
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.log(err)
        })
    }
    getUsers()
  }, [])
  return (
    <div
      style={{
        backgroundColor: '#E8ECEF',
        height: '800px',
        width: '100%',
        paddingTop: '100px',
      }}
    >
      <div
        style={{
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <ShoppingCartCheckoutIcon />
        <h1 style={{ margin: '0' }}>Checkout</h1>
        <p>Login or Register to checkout</p>
        <hr></hr>
        <Button
          variant="dark"
          type="submit"
          href="/login"
          style={{ width: '100px', marginRight: '10px', marginTop: '40px' }}
        >
          Login
        </Button>
        <Button
          variant="light"
          type="submit"
          href="/register"
          style={{ width: '100px', marginTop: '40px' }}
        >
          Register
        </Button>
      </div>
    </div>
  )
}
