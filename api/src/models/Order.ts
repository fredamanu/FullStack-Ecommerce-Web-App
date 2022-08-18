import mongoose, { Document } from 'mongoose'

import { productSchema, ProductDocument } from './Product'

export type ShippingAddress = {
  name: string
  address: string
  city: string
  postalCode: number
  country: string
}

export type OrderDocument = Document & {
  userId: string
  orderItems: ProductDocument[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: string
  isDelivered: boolean
  deliveredAt: string
}

const shippingAddressSchema = new mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  postalCode: { type: Number, require: true },
  country: { type: String, require: true },
})

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    orderItems: {
      type: [productSchema],
      require: true,
    },
    shippingAddress: {
      type: shippingAddressSchema,
      require: true,
    },
    paymentMethod: {
      type: String,
      default: 'Paypal',
      require: true,
    },
    taxPrice: {
      type: Number,
      default: 0.0,
      require: true,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
      require: true,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
      require: true,
    },
    isPaid: {
      type: Boolean,
      require: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      require: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model<OrderDocument>('Order', orderSchema)

export default Order
