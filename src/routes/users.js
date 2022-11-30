const express = require('express');
const router = express.Router();
const userService = require('../services/users');

router.get('/', async (_req, res, next) => {
  try {
    const result = await userService.get();
    res.json(result);
  } catch (error) {
    console.error('Error getting the users.', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = { ...req.body };
    const result = await userService.create(data);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = { ...req.params, ...req.body };
    const result = await userService.update(data);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = { ...req.params };
    const result = await userService.remove(data.id);
    res.json(result);
  } catch (error) {
    console.error('Error creating a user.', error);
    next(error);
  }
});

module.exports = router;
