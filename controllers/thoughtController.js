const { User, Thought } = require('../models');

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
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                // $addToSet to add the reaction to the reactions array belonging to the Thought
                { $addToSet: { reactions: req.body} },
                { runValidators: true, new: true }
            );

            // error handling to check for thought
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a reaction 
    // use reactionId in the req.body
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            // error handling to check for thought
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
    
           // error handling to check for reaction
            const reaction = thought.reactions.some(
                reaction => reaction.reactionId == req.body.reactionId
            );
    
            if (!reaction) {
                return res.status(404).json({ message: 'No reaction with that ID found in this thought' });
            }
            
           // if thought and reaction exist, then continue with removing reaction
            await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                // $pull to delete reaction from the reactions array belonging to Thought
                { $pull: { reactions: { reactionId: req.body.reactionId } } },
                { runValidators: true, new: true }
            );
    
            res.json({ message: 'Reaction removed!' });

        } catch (err) {
            res.status(500).json(err);
        }
    }

};