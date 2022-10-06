import React from 'react'
import { AccountContent, Footer, Navigation } from '../components'

const Account = () => { 
 return (
  <>
   <Navigation />
   <main>
    <AccountContent />
   </main>
   <footer>
    <Footer />
   </footer>
  </>
 )
}

export default Account
