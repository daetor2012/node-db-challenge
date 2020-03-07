
exports.up = async function(knex) {
    
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.integer("completed").defaultTo(0)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.integer("completed").defaultTo(0)
        table.integer("project_id").notNull()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        
    })

    await knex.schema.createTable("project_resources", (table) => {
        table.increments("id")
        table.integer("project_id").notNull()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer("resource_id").notNull()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

    
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
