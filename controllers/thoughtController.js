const { User, Thought } = require('../models');

// TODO getThoughts, 
// TODO getSingleThought,
// TODO createThought,
// TODO updateThought,
// TODO deleteThought,
// TODO addReaction,
// TODO removeReaction

module.exports = {

    // get all thoughts
    async getThoughts(req, res) {},

    // get a single thought by _id 
    async getSingleThought(req, res) {},

    // create a new thought
    async createThought(req, res) {},

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