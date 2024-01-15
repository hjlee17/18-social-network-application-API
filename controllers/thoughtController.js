const { User, Thought } = require('../models');

// DONE getThoughts, 
// TODO getSingleThought,
// DONE createThought,
// TODO updateThought,
// TODO deleteThought,
// TODO addReaction,
// TODO removeReaction

module.exports = {

    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get a single thought by _id 
    async getSingleThought(req, res) {
        try {
            // look for thought
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions');
            
            // error handling to check for thought
            if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
            }
    
            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            
            // after thought is created, $push to the thoughts array for the User
            await User.findOneAndUpdate(
                { username: thought.username }, 
                { $push: { thoughts: thought._id } }
            );

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update a thought by _id
    async updateThought(req, res) {},

    // delete a thought by _id
    async deleteThought(req, res) {},

    // add a reaction to thought by _id (of thought)
    async addReaction(req, res) {},

    // remove a reaction 
    // use reactionId in the req.body
    async removeReaction(req, res) {}

};