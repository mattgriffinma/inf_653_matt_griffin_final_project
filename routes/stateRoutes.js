const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

//router.get('/', stateController.getAllStates);
router.get('/states/', stateController.getAllStates);
router.get('/states/:stateCode', stateController.getState);
router.post('/states/', stateController.createState);
router.patch('/states/:stateCode', stateController.updateState);
router.delete('/states/:stateCode', stateController.deleteState);

module.exports = router;