const db = require("../config")

function findResources() {
    return db("resources")
}

function findResource(id) {
    return db("resources").where({ id }).first()
}

async function addResource(data) {
    try {
        const [id] = await db("resources").insert(data)

        return findResource(id)
    } catch {
        return { message: "This post failed." }
    }
}

module.exports = {
    findResources,
    findResource,
    addResource
}
