exports.up = function (knex) {
  return knex.schema.createTable('ghost_types', t => {
    t.increments();
    t.timestamps(false, true);
    t.integer('ghost_id')
      .references('id')
      .inTable('ghosts')
      .onUpdate('CASCADE');
    t.integer('type_id')
      .references('id')
      .inTable('types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ghost_types');
};
