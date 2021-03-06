const knex = require("../db/connection");

function read(table_id) {
  return knex("tables").select("*").where({ table_id: table_id }).first();
}

function list() {
  return knex("tables").select("*").orderBy("table_name", "asc");
}

function create(table) {
  return knex("tables")
    .insert(table)
    .returning("*")
    .then((table) => table[0]);
}

function update(table_id, { reservation_id }) {
  return knex("tables")
    .update({ reservation_id })
    .where({ table_id: table_id })
    .returning("*")
    .then((table) => table[0]);
}

function destroy(table_id) {
  
  return knex("tables")
    .update({ reservation_id: null })
    .where({ table_id: table_id })
    .returning("*")
    .then((table) => table[0]);
}

module.exports = {
  list,
  create,
  update,
  read,
  destroy,
};