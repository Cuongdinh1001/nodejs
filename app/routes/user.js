const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/test', userController.test);
router.post('/create', userController.create);
router.get('/:id', userController.detail);
router.put('/:id/update', userController.update);
router.delete('/:id/delete', userController.delete);
module.exports = router;