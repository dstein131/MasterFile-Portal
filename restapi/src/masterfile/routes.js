const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStates);

router.get('/counties', controller.getCounties);

router.get('/counties/seed', controller.createCountyDataTable);

router.get('/counties/seed/adams', controller.seedAdamsCounty);



module.exports = router;
