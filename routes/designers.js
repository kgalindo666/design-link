var express = require('express');
var router = express.Router();
const designersCtrl = require('../controllers/designers');

router.get('/', designersCtrl.index)
router.get('/:id', designersCtrl.show)
router.get('/:id/edit', designersCtrl.edit)
router.get('/:id/comments', designersCtrl.newComment)

router.put('/:id', designersCtrl.update)

router.delete('/:id', designersCtrl.myDelete)

module.exports = router;


