// @ts-nocheck
import { NextFunction, Request, Response } from 'express'
import { STRIPE_SECRET_KEY } from '../util/secrets'
import Stripe from 'stripe'
import { BadRequestError } from '../helpers/apiError'

// @ts-ignore
const stripe = new Stripe(STRIPE_SECRET_KEY)

export const paymentProcessing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = {
      submit_type: 'pay',
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['DE', 'NO'],
      },
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1LcsMGG5HlxfACqmeW3MWHhW' },
        { shipping_rate: 'shr_1LcsODG5HlxfACqmk3Zbd3Un' },
      ],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: 'nok',
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: { enabled: true, minimum: 1 },
          quantity: item.qty,
        }
      }),
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    }
    const session = await stripe.checkout.sessions.create(params)

    res.status(200).json(session)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
