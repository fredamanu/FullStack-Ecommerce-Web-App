import BestSeller, { BestSellerDocument } from '../models/BestSeller'
import { NotFoundError } from '../helpers/apiError'

const findBestSeller = async (): Promise<BestSellerDocument[]> => {
  const foundBestSeller = await BestSeller.find()
  if (!foundBestSeller) {
    throw new NotFoundError('No bestseller found')
  }
  return foundBestSeller
}

export default { findBestSeller }
