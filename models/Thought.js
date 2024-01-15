const { Schema, Types, model } = require('mongoose');
const formatDate = require('../utils/formatDate');

const reactionSchema = new Schema(
    {
        // reactionId property is inluded per the README instructions, but
        // is an id not made automatically by mongoose? why is 'reactionId' needed?
        reactionId: {
            type: Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        // is it necessary to reference the User model?
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: reactionCreatedAt => formatDate(reactionCreatedAt) 
        }
    }, 
    {
        toJSON: {
            getters: true
        },
        // unclear what this is doing?
        id: false
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: thoughtCreatedAt => formatDate(thoughtCreatedAt) 
        },
        // is it necessary to reference the User model?
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // unclear what this is doing?
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
  
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;