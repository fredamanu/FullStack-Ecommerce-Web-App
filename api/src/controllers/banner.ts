import { Request, Response, NextFunction } from 'express'
import BannerServices from '../services/banner'
import { BadRequestError } from '../helpers/apiError'

export const findBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BannerServices.findBanner())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
