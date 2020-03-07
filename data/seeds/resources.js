exports.seed = async function(knex) {
  await knex("resources").insert([
      { name: "vacuum cleaner", description: "cleaning for office carpet" },
      { name: "maintenance PC", description: "PC with software for tasks on other PCs" },
      { name: "Petty Cash" }
  ])
}