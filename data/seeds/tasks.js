exports.seed = async function(knex) {
  await knex("tasks").insert([
      { description: "upgrade PC OS", notes: "Need windows 10 for all office computers", completed: 0, project_id: 2 },
      { description: "buy newer vacuum cleaner", notes: "current vacuum doesn't clean very well", completed: 0, project_id: 1 },
      { description:  "upgrade windows for office space", completed: 1, project_id: 3}
  ])
}