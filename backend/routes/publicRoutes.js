const express = require('express');
const router = express.Router();
const publicControllers = require('../controllers/publicControllers')

router.get('/', publicControllers.showHomepage);
router.get('/movies/:id', publicControllers.showMovieInfo);

module.exports = router;