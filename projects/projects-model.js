const db = require("../config")

function findProjects() {
    return db("projects")
}

function findProject(id) {
    return db("projects").where({ id }).first()
}

async function addProject(data) {
    try {
        const [id] = await db("projects").insert(data)

        return findProject(id)
    } catch {
        return { message: "This post failed." }
    }
}

module.exports = {
    findProjects,
    findProject,
    addProject
}

/*  - [ ] adding projects.
  - [ ] retrieving a list of projects.*/