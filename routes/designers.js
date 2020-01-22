var express = require('express');
var router = express.Router();
const designersCtrl = require('../controllers/designers');


router.get('/', designersCtrl.index)
router.get('/myaccount', designersCtrl.editProfile)
router.get('/:id', designersCtrl.show)


// router.post('/myaccount', designersCtrl.newDes)

module.exports = router;
