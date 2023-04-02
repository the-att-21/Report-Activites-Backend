const router = require('express').Router();

const { createActivity, getActivities, getspecific} = require('../controllers/formController');

router.post('/create', createActivity);
router.get('/get', getActivities);
router.get('/getspecific', getspecific);

module.exports = router;

