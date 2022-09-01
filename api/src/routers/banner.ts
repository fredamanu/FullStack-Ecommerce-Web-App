import express from 'express'
import { findBanner } from '../controllers/banner'

const router = express.Router()

router.get('/', findBanner)

export default router
