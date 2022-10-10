import React from 'react'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { FaAddressCard, FaCcMastercard } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { MdLocalShipping, MdSecurity } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import MotionWrapper from '../../Wrapper/MotionWrapper'

import './AccountContent.css'

const AccountContent = () => {
const userId = useParams().userId as string   
const navigate = useNavigate()
 return (
  <div className="account-content">
   <div className="account-content-flex-container">
    <h3>My Account</h3>
    <div className='account-content-cards'>
     <div className="flex-item">
      <div>
       <GoPackage />
      </div>
      <div onClick={()=> navigate(`/orders/${userId}`)}>
       <h6>My Orders</h6>
       <p>Track, return or buy things again</p>
      </div>
     </div>
     <div className="flex-item">
      <div>
       <FaAddressCard />
      </div>
      <div>
       <h6>My Addresses</h6>
       <p>Edit shipping and or billing addresses</p>
      </div>
     </div>
     <div className="flex-item">
      <div>
       <MdLocalShipping />
      </div>
      <div>
       <h6>Shipping Policy</h6>
       <p>Find shipping polices and infomation</p>
      </div>
     </div>
     <div className="flex-item">
      <div>
       <MdSecurity />
      </div>
      <div>
       <h6>Login and Security</h6>
       <p>Edit login, name and mobile number</p>
      </div>
     </div>
     <div className="flex-item">
      <div>
       <FaCcMastercard />
      </div>
      <div>
       <h6>My Payments</h6>
       <p>Manage payment methods</p>
      </div>
     </div>
     <div className="flex-item">
      <div>
       <BsFillQuestionOctagonFill />
      </div>
      <div>
       <h6>Help</h6>
       <p>Browse available help topics</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default MotionWrapper(AccountContent)
