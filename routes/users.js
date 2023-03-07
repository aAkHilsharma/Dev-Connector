const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// @route   Post api/profile
// @desc    Register route
// @access  Public

router.post(
  '/',
  [
    body('name', 'Name is required').notEmpty(),
    body('email', 'please enter a valid email').isEmail(),
    body('password', 'Please enter a password of length 6 or more').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json([{ msg: 'User already exists' }]);
      }
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // return jsonwebtoken
      res.send('Users Registered');
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;
