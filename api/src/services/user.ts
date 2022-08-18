import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  const newUser = await user.save()
  return newUser
}

const findUserById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId).populate('orders')
  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

const findUserByEmail = async (
  email: string,
  password: string
): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email: email })
  if (!foundUser) {
    throw new NotFoundError(`User ${email} not found`)
  } else {
    if (foundUser.password === password) {
      return foundUser
    }
    throw new NotFoundError('Wrong password or email')
  }
}

const findAllUsers = async (): Promise<UserDocument[]> => {
  const foundUsers = await User.find()
  if (!foundUsers) {
    throw new NotFoundError('No users')
  }
  return foundUsers
}

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })
  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndDelete(userId)
  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

export default {
  createUser,
  findUserById,
  findUserByEmail,
  findAllUsers,
  updateUser,
  deleteUser,
}
