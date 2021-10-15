exports.up = function (knex) {
  return knex.schema.createTable('ghosts', t => {
    t.increments();
    t.timestamps(false, true);
    t.string('mortal_name');
    t.string('last_sighted');
    t.string('first_sighted');
    t.integer('number_of_sightings');
    t.string('location');
    t.text('details');
    t.integer('benevolence_malevolence');
    t.boolean('is_corporeal');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ghosts');
};
