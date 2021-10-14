exports.up = function (knex) {
  return knex.schema.createTable('types', t => {
    t.increments();
    t.timestamps(false, true);
    t.string('type');
    t.text('details');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('types');
};
