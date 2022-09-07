import bcrypt from 'bcrypt'
import User, { UserDocument } from '../../src/models/User'
import UserServices from '../../src/services/user'
import connect, { MongodHelper } from '../db-helper'

const createUser = async () => {
  const hash = (await bcrypt.hash('gh793jgdjs', 10)) as string
  const newUser = new User({
    firstName: 'Freda',
    lastName: 'Manu',
    email: 'example@gmail.com',
    password: hash,
  })
  return await UserServices.createUser(newUser)
}

describe('user service', () => {
  let mongodHelper: MongodHelper

  beforeAll(async () => {
    mongodHelper = await connect()
  })
  afterEach(async () => {
    await mongodHelper.clearDatabase()
  })
  afterAll(async () => {
    await mongodHelper.closeDatabase()
  })
  it('should create a new user', async () => {
    const newUser = await createUser()
    expect(newUser).toHaveProperty('firstName')
  })
  it('should find user', async () => {
    const newUser = await createUser()
    const foundUser = await UserServices.findUser(newUser)
    expect(foundUser._id).toEqual(newUser._id)
  })
  it('should find user by email', async () => {
    const newUser = await createUser()
    const user: any = {
      firstName: 'Freda',
      lastName: 'Manu',
      email: 'example@gmail.com',
      password: 'gh793jgdjs',
    }
    const foundUser = await UserServices.findUserByEmail(user)
    expect(foundUser).toHaveProperty('firstName', 'Freda')
  })
  it('should find or create user', async () => {
    const newUser = await createUser()
    return await UserServices.findOrCreate(newUser).catch((e) => {
      expect(e.message).toBe('user already exist')
    })
  })

  it('should find all users', async () => {
    await createUser()
    const users = await UserServices.findAllUsers()
    expect(users).toHaveLength(1)
  })
  it('should update user', async () => {
    const newUser = await createUser()
    const foundUser = await UserServices.updateUser(newUser._id, {
      firstName: 'Linda',
    })
    expect(foundUser.firstName).toEqual('Linda')
  })
  it('should delete user', async () => {
    const newUser = await createUser()
    const foundUser = await UserServices.deleteUser(newUser._id)
    return UserServices.findUser(foundUser).catch((err) => {
      expect(err.message).toBe(`user not found`)
    })
  })
})
