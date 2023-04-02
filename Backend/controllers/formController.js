//Making controllers for form
const Form = require('../models/Form')

const createActivity = async (req, res) => {
    try {
        const form = new Form(req.body)
        await form.save()
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getActivities = async (req, res) => {
    try {
        const form = await Form.find()
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getspecific = async (req, res) => {
    try {
        // const department = req.params.branch
        const { department, year } = req.body;
        const form = await Form.find({ department, year })
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { createActivity, getActivities, getspecific }


