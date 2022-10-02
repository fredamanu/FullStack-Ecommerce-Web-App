import React from 'react'
import { Footer, Navigation, SignUpForm } from '../components'

const SignUp = () => {
  return (
    <div className="layout login-page">
      {/* <Navigation /> */}
      <main className="main-container">
        <SignUpForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default SignUp
