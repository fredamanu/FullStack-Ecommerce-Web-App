import express from 'express'
import { findBestSeller } from '../controllers/bestseller'

const router = express.Router()

router.get('/', findBestSeller)

export default router
