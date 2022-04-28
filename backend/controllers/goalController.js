// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Set Goal
// @route Set /api/goals
// @access Private
const setGoal = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Add a new text field')
    }

    res.status(200).json({message: 'Set goal'})
}


// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}


// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}