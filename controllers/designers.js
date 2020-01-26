
const User = require('../models/user');

const index = (req, res) => {

    User.find({}, (err, users) => {
        console.log(users)
        res.render('designers/index', { title: 'DESIGNERS LIST',
        designers: users
        })
    })
}

const show = (req, res) => {
 User.findById(req.params.id, (err, user) => {
    res.render('designers/show', {
        title: 'designer detail page',
        designer: user,
    })
 })
}

const edit = (req, res) => {
res.render('designers/edit', {userId: req.params.id})


}

const update = (req, res) =>  {
    User.findByIdAndUpdate(req.params.id, req.body, ()=>{
        console.log('we updated')
        res.redirect(`/designers/${req.params.id}`)
    })
}

const newComment = (req, res) => {

    // console.log('NEW COMMENT PAGEs')
    res.render('designers/comment', {userId: req.params.id})
  
}





module.exports = {
    index,
    show,
    edit,
    update,
    newComment,
   
} 

