const asyncHandler = require('express-async-handler');
// when using mongoose to interact with database, we get back a promise. so async is needed
// asyncHandler replaces try catch block

// @desc GET Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'GET goals'})
})

// @desc SET Goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body)

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field to set goals')
  }
  res.status(200).json({message: 'SET goals'})
})

// @desc UPDATE Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
  res
    .status(200)
    .json({ message: `Update goal ${req.params.id}` });
})

// @desc DELETE Goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete goal ${req.params.id}` });
})

module.exports = {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal
}