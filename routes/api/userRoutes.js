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

module.exports = router;
