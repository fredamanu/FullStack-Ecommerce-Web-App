import Banner, { BannerDocument } from '../models/Banner'
import { NotFoundError } from '../helpers/apiError'

const findBanner = async (): Promise<BannerDocument[]> => {
  const foundBanner = await Banner.find()
  if (!foundBanner) {
    throw new NotFoundError('No banner found')
  }
  return foundBanner
}

export default { findBanner }
