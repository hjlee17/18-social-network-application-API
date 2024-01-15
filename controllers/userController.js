const { User, Thought } = require('../models');

// TODO getUsers, 
// TODO getSingleUser,
// TODO createUser,
// TODO updateUser,
// TODO deleteUser,
// TODO addFriend,
// TODO removeFriend

module.exports = {

    // get all users
    async getUsers(req, res) {},

    // get a single user by _id and populated thought and friend data
    async getSingleUser(req, res) {},

    // create a new user
    async createUser(req, res) {},

    // update a user by _id
    async updateUser(req, res) {},

    // delete a user and associated thoughts
    async deleteUser(req, res) {},

    // add a friend to user by :userId and :friendId
    async addFriend(req, res) {},

    // remove a friend from user by :userId and :friendId
    async removeFriend(req, res) {}
    
};