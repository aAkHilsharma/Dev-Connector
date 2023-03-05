const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// @route   Post api/profile
// @desc    Register route
// @access  Public

router.post(
  '/',
  [
    body('name', 'Name is required').notEmpty(),
    body('email', 'please neter a valid email').isEmail(),
    body('password', 'Please enter a password of length 6 or more').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('Users Route');
  }
);

module.exports = router;
