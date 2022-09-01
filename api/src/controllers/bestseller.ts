import { Request, Response, NextFunction } from 'express'
import BestSellerServices from '../services/bestSeller'
import { BadRequestError } from '../helpers/apiError'

export const findBestSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BestSellerServices.findBestSeller())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
