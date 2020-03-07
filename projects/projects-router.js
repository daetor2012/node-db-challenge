const express = require("express")

const model = require("./projects-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await model.findProjects()

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params

        const data = await model.findProject(id)

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const post = await model.addProject(req.body)

        res.json(post)
    } catch(err) {
        next(err)
    }
})

module.exports = router;