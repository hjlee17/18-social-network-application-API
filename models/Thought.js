// do i need to include Type in the destructing below?
const { Schema, Types, model } = require('mongoose');
const formatDate = require('../utils/formatDate');

const reactionSchema = new Schema(
    {
        // is an id not made automatically by mongoose? why do i need 'reactionId'
        reactionId: {
            type: Types.ObjectId,
            default: () => new ObjectId()
        },
          reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        // do i have to reference the user model?
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
        // do i have to reference the user model?
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
        // what is this doing???
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
  
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;