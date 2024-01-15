const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// // GET and POST at /api/thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;
