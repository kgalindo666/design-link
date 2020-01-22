const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    designerName: 'String',
    userName: 'String',
    website: 'String',
    bio: 'String'

})

module.exports = mongoose.model('User', userSchema)
/*


const commentSchema = new Schema({

    author: String,
    content: String
})
*/
