import User, { UserDocument } from '../models/User'
import { BadRequestError, NotFoundError } from '../helpers/apiError'
import bcrypt from 'bcrypt'

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

const findUser = async (user: UserDocument): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email: user.email })
  if (!foundUser) {
    throw new NotFoundError('user not found')
  }
  return foundUser
}

const findUserByEmail = async (user: UserDocument): Promise<UserDocument> => {
  const foundUser = await findUser(user)
  if (!foundUser) {
    throw new NotFoundError('user not found')
  } else {
    const match = await bcrypt.compare(user.password, foundUser.password)
    if (match === true) {
      return foundUser
    }
    throw new NotFoundError('password is incorrect')
  }
}

const findOrCreate = async (user: UserDocument) => {
  const foundUser = await findUser(user)
  if (!foundUser) {
    const newUser = await createUser(user)
    return newUser
  }
  throw new BadRequestError('user already exist')
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
    throw new NotFoundError('user not found')
  }
  return foundUser
}

export default {
  findUser,
  createUser,
  findOrCreate,
  findUserById,
  findUserByEmail,
  findAllUsers,
  updateUser,
  deleteUser,
}
