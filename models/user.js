const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    name: 'String',
    email: 'String',
    userName: 'String',
    website: 'String',
    bio: 'String',
    googleId: 'String'

})

module.exports = mongoose.model('User', userSchema)
/*


const commentSchema = new Schema({

    author: String,
    content: String
})
*/
