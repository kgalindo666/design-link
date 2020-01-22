var express = require('express');
var router = express.Router();
var passport = require('passport');

// DESIGN LINK LANDING PAGE / MAIN
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DesignLink' });
});

// PASSPORT ROUTES 

router.get(
  '/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] })
)
// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: 'designers/myaccount',
    failureRedirect: '/',
  })
)
// OAuth logout route
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})



module.exports = router;
