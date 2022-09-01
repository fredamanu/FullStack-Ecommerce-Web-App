import { loadStripe } from '@stripe/stripe-js'

let stripePromise: any

const getStripe = () => {
  const key = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
  if (!stripePromise) {
    stripePromise = loadStripe(key)
  }
  return stripePromise
}

export default getStripe
