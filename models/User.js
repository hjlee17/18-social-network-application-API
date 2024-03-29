const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
      // mongoose automatically assigns an id (ObjectId)
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Must be a valid email address'],
      },
      thoughts: [{
        type: Types.ObjectId,
        ref: 'Thought',
      }],
      friends: [{
        type: Types.ObjectId,
        ref: 'User',
      }]
    },
    {
      // include virtuals when doc is converted to json
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);
  
module.exports = User;