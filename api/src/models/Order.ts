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
      required: true,
      ref: 'User',
    },
    orderItems: {
      type: [productSchema],
      required: true,
    },
    shippingAddress: {
      type: shippingAddressSchema,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: 'Credit Card',
      required: true,
    },
    taxPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
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
