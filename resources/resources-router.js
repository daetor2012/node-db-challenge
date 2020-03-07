const express = require("express")

const model = require("./resources-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await model.findResources()

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params

        const data = await model.findResource(id)

        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const post = await model.addResource(req.body)

        res.json(post)
    } catch(err) {
        next(err)
    }
})

module.exports = router;