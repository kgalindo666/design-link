var express = require('express');
var router = express.Router();
const designersCtrl = require('../controllers/designers');


router.get('/', designersCtrl.index)
router.get('/new', designersCtrl.new)
router.get('/:id', designersCtrl.show)

router.post('/create', designersCtrl.create)

module.exports = router;
