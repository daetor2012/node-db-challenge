exports.seed = async function(knex) {
  await knex("projects").insert([
      { name: "cleaning", description: "clean office space", completed: 0 },
      { name: "maintaining computers", description: "maintenance work on office PCs", completed: 0 },
      { name: "office renovating", completed: 1 }
  ])
}