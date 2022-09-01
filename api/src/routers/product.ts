import express from 'express'

import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductByName,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

router.get('/', findAllProducts)
// router.get('/:productId', findProductById)
router.get('/:productName', findProductByName)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router
