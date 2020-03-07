const express = require("express")
const server = express()
const port = 5000;
const projectsRouter = require("./projects/projects-router")
const welcome = require("./welcome-router")
const resourcesRouter = require("./resources/resources-router")
const tasksRouter = require("./tasks/tasks-router")

server.use(express.json())

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.use("/", welcome)
server.use("/projects", projectsRouter)
server.use("/resources", resourcesRouter)
server.use("/tasks", tasksRouter)

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
