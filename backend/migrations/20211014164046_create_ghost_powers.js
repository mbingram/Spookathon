exports.up = function (knex) {
  return knex.schema.createTable('ghost_powers', t => {
    t.increments();
    t.timestamps(false, true);
    t.integer('ghost_id')
      .references('id')
      .inTable('ghosts')
      .onUpdate('CASCADE');
    t.integer('power_id')
      .references('id')
      .inTable('powers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ghost_types');
};
