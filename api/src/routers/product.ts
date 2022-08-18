import express from 'express'

import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

router.get('/', findAllProducts)
router.get('/:productId', findProductById)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router
