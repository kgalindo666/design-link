
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

const newDes = (req, res) => {
    res.render('designers/new', {
        title: 'new designer form',
    })
}


const editProfile = (req, res) => {
    console.log('hit create', req.body)
res.render('designers/myaccount')

}



/*         for (let key in req.body) {
          if (req.body[key] === '') delete req.body[key]
        }
        var newDesigner = new Designer(req.body)
        newDesigner.save(err => {
          if (err) return res.redirect('/movies/new')
          // res.redirect('/movies');
          res.redirect(`/movies/${movie._id}`)
        }) */
       



module.exports = {
    index,
    show,
    editProfile,
   // new: newDes,
} 

