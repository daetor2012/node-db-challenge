const db = require("../config")

function findTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("t.description as Task Description", "t.notes as Task Notes", "t.completed as Task Completed", "p.name as Project Name", "p.description as Project Description")
}

function findTask(id) {
    return db("tasks").where({ id }).first()
}

async function addTask(data) {
    try {
        const [id] = await db("tasks").insert(data)

        return findTask(id)
    } catch {
        return { message: "This post failed." }
    }
}

function deleteTask(id) {
    return db("tasks").where({ id }).del()
}

module.exports = {
    findTasks,
    findTask,
    addTask,
    deleteTask
}