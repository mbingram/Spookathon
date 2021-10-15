exports.up = function (knex) {
  return knex.schema.createTable('powers', t => {
    t.increments();
    t.timestamps(false, true);
    t.string('name');
    t.text('details');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('powers');
};
