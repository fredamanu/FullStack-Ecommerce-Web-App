import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import GoogleTokenStrategy from 'passport-google-id-token'

import userRouter from './routers/user'
import movieRouter from './routers/movie'
import productRouter from './routers/product'
import orderRouter from './routers/order'
import bannerRouter from './routers/banner'
import bestSellerRouter from './routers/bestSeller'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import paymentRouter from './routers/payment'
import { GOOGLE_CLIENT_ID } from './util/secrets'
import User from './models/User'
import UserServices from './services/user'
dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cors())
app.use(
  session({ secret: 'This is a secret', resave: true, saveUninitialized: true })
)
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user: any, done: any) => {
  return done(null, user)
})

passport.deserializeUser((user: any, done: any) => {
  return done(null, user)
})

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: '/auth/google/callback',
//     },
//     function (
//       accessToken: any,
//       refreshToken: any,
//       profile: any,
//       cb: any,
//       email: any
//     ) {
//       console.log('email:', email)
//       cb(null, profile)
//     }
//   )
// )

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
    },
    async function (parsedToken: any, googleId: any, done: any) {
      const newUser = new User({
        firstName: parsedToken.payload.given_name,
        lastName: parsedToken.payload.family_name,
        email: parsedToken.payload.email,
      })
      const user = await UserServices.findOrCreate(newUser)
      done(null, user)
    }
  )
)

app.post(
  '/auth/google',
  passport.authenticate('google-id-token'),
  function (req, res) {
    // do something with req.user
    const isAuthenticated = req.isAuthenticated()
    console.log('isAuthenticated :', isAuthenticated)
    res.json(req.user)
  }
)

// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// )

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('http://localhost:3000')
//   }
// )

//Middleware

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/banner', bannerRouter)
app.use('/api/v1/bestsellers', bestSellerRouter)
app.use('/api/v1/payments', paymentRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
