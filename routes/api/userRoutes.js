const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET and POST at /api/users
router.route('/').get(getUsers).post(createUser);

// GET one, PUT, and DELETE at /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
