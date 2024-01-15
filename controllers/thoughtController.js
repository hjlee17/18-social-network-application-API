const { User, Thought } = require('../models');

// DONE getThoughts, 
// DONE getSingleThought,
// DONE createThought,
// DONE updateThought,
// DONE deleteThought,
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
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                // $set tells Mongoose to update only the fields that are present in req.body 
                { $set: req.body },
                { runValidators: true, new: true }
            );

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a thought by _id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
    
            // error handling to check for thought
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            // $pull to delete thought from the thoughts array belonging to the User
            await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } }
            );

            res.json({ message: 'Thought deleted!' })

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // add a reaction to thought by _id (of thought)
    async addReaction(req, res) {},

    // remove a reaction 
    // use reactionId in the req.body
    async removeReaction(req, res) {}

};