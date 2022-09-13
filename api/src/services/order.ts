import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'
import Order, { OrderDocument } from '../models/Order'
import UserServices from '../services/user'

const createOrder = async (order: OrderDocument): Promise<UserDocument> => {
  await order.save()
  const user = await UserServices.findUserById(order.userId)
  user.orders.push(order._id)
  await user.save()
  return user
}

const findOrderById = async (orderId: string): Promise<OrderDocument> => {
  const foundOrder = await Order.findById(orderId)
  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }
  return foundOrder
}

const findAllOrders = async (userId: string): Promise<OrderDocument[]> => {
  const foundOrders = await Order.find({ userId: userId })
  if (!foundOrders) {
    throw new NotFoundError('No orders')
  }
  return foundOrders
}

const updateOrder = async (
  orderId: string,
  update: Partial<OrderDocument>
): Promise<OrderDocument> => {
  const foundOrder = await Order.findByIdAndUpdate(orderId, update, {
    new: true,
  })
  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }
  return foundOrder
}

const deleteOrder = async (
  orderId: string,
  userId: string
): Promise<OrderDocument> => {
  const foundOrder = await Order.findByIdAndDelete(orderId)
  if (!foundOrder) {
    throw new NotFoundError(`Order ${orderId} not found`)
  }
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { orders: orderId } }
  )
  await user?.save()
  return foundOrder
}

export default {
  createOrder,
  findAllOrders,
  findOrderById,
  updateOrder,
  deleteOrder,
}
