import express from 'express'

import {
  createUser,
  deleteUser,
  findAllUsers,
  findOrCreateUser,
  findUserByEmail,
  findUserById,
  updateUser,
} from '../controllers/user'

const router = express.Router()

router.get('/', findAllUsers)
router.get('/:userId', findUserById)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/register', findOrCreateUser)
router.post('/login', findUserByEmail)

export default router

// function (req, res) {
//   res.send('hello')
// }
