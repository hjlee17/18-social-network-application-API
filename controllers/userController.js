const { User, Thought } = require('../models');

// DONE getUsers, 
// TODO getSingleUser,
// DONE createUser,
// TODO updateUser,
// TODO deleteUser,
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
    async getSingleUser(req, res) {},

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
    async updateUser(req, res) {},

    // delete a user and associated thoughts
    async deleteUser(req, res) {},

    // add a friend to user by :userId and :friendId
    async addFriend(req, res) {},

    // remove a friend from user by :userId and :friendId
    async removeFriend(req, res) {}

};