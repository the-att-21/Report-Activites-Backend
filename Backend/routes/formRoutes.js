const router = require('express').Router();

const { createActivity, getActivities, getspecific, getDepartmentwise} = require('../controllers/formController');

router.post('/create', createActivity);
router.get('/get', getActivities);
router.get('/getbranchwise', getDepartmentwise);
router.post('/getspecific', getspecific);

module.exports = router;

