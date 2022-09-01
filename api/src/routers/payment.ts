import express from 'express'
import { paymentProcessing } from '../controllers/payment'
const router = express.Router()

router.post('/', paymentProcessing)

export default router
