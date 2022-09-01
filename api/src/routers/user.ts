import express from 'express'

import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  updateUser,
} from '../controllers/user'

const router = express.Router()

router.get('/', findAllUsers)
router.get('/:userId', findUserById)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router

// function (req, res) {
//   res.send('hello')
// }
