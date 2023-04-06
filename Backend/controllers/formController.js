//Making controllers for form
const Form = require('../models/Form')

const createActivity = async (req, res) => {
    try {
        const form = new Form(req.body)
        // console.log(form);
        await form.save()
        console.log("Successfully transferred data to database");
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getActivities = async (req, res) => {
    try {
        const form = await Form.find()
        // console.log(form);
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getDepartmentwise = async (req, res) => {
    try {
        // const department = req.params.branch
        const { department, course } = req.body;
        const form = await Form.find({ department, course })
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getspecific = async (req, res) => {
    try {
        // const department = req.params.branch
        const { department, class_name, course } = req.body;
        const form = await Form.find({ department, class_name, course })
        console.log(department,class_name,course);
        res.status(200).json(form)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { createActivity, getActivities, getspecific, getDepartmentwise }


