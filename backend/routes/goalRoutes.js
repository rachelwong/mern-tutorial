const express = require('express');
const router = express.Router();
const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controllers/goalControllers')
// base url is /api/goals as specified in server.js

// router.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Get goals' });
// })

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// router.post('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Set goals' });
// })

// router.put('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ message: `Update goals ${req.params.id}` });
// })

// router.delete('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ message: `Delete goals ${req.params.id}` });
// })


module.exports = router