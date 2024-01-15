const { User, Thought } = require('../models');

// DONE getUsers, 
// INCOMPLETE getSingleUser,
// DONE createUser,
// DONE updateUser,
// DONE deleteUser,
// TODO addFriend,
// TODO removeFriend

module.exports = {

    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get a single user by _id and populated thought and friend data
    async getSingleUser(req, res) {
        try {
            // look for user
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts');
            // .populate('friends');
            
            // error handling to check for user
            if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
            }
    
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update a user by _id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                // $set tells Mongoose to update only the fields that are present in req.body 
                { $set: req.body },
                { runValidators: true, new: true }
            );

            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a user and associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            // error handling to check for user
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            // delete thoughts associated with user
            await Thought.deleteMany({ _id: { $in: user.thoughts } });

            res.json({ message: 'User and associated thoughts deleted!' })

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // add a friend to user by :userId and :friendId
    async addFriend(req, res) {},

    // remove a friend from user by :userId and :friendId
    async removeFriend(req, res) {}

};