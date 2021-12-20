const router = require('express').Router()
const itemCtrl = require('../controllers/itemCtrl')

router.route('/')
    .get(itemCtrl.getItems)
    .post(itemCtrl.createItems)

router.route('/:id')
    .delete(itemCtrl.deleteItems)
    .put(itemCtrl.updateItems)
    .get(itemCtrl.getItem)

module.exports = router;