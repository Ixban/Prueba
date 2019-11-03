const express = require('express');

const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
   const result = await Task.find();
   res.json(result);
});


router.post('/', async (req, res) => {
    const result = new Task(req.body);
    await result.save();
    res.json({
        status: 'Guardado'
    });
});

module.exports = router;
