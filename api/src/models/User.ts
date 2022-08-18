import mongoose, { Document } from 'mongoose'
import encrypt from 'mongoose-encryption'
import { Secret } from '../util/secrets'
import { OrderDocument } from './Order'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  isAdmin: boolean
  isBanned: boolean
  orders: OrderDocument[]
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
      require: true,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
  }
)

userSchema.plugin(encrypt, { secret: Secret, encryptedFields: ['password'] })

const User = mongoose.model<UserDocument>('User', userSchema)

export default User
