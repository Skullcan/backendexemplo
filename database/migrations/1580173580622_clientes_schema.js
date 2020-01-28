"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClientesSchema extends Schema {
  up() {
    this.table("clientes", table => {
      table.integer("pais_id");
    });
  }

  down() {
    this.table("clientes", table => {
      table.dropColumn("pais_id");
    });
  }
}

module.exports = ClientesSchema;
