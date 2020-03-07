const express = require("express")

const model = require("./tasks-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await model.findTasks()

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params

        const data = await model.findTask(id)

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        
        if(!req.body.project_id) {
            res.status(500).json({ message: "You must include a project id." })
        }
        if(!req.body.description) {
            res.status(500).json({ message: "You must include a description." })
        }
        
        const post = await model.addTask(req.body)

        res.json(post)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await model.deleteTask(id)
        if(data === 1) {
            res.json({ message: "Post successfully deleted!" })
        } else res.json({ message: "ID provided does not exist." })
    } catch(err) {
        next(err)
    }

    
})
module.exports = router;