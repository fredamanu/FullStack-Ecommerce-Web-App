import React from 'react'
import MotionWrapper from '../../Wrapper/MotionWrapper'

import './Disclaimer.css'
const Article = () => {
  return (
    <div className="discliamer-container">
      <p id="vegan">🌱Vegan</p>
      <p id="cruelty">🐰Cruelty Free</p>
      <p id="made-in">🇳🇴Made in Norway</p>
      <p id="natural">🌿+ 96% Natural</p>
      <p id="reusable">♻️Reusable packaging</p>
    </div>
  )
}

export default MotionWrapper(Article)
