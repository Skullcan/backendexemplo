"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClientesSchema extends Schema {
  up() {
    this.create("clientes", table => {
      table.increments();
      table.integer("codigo_cli").unique();
      table.string("razao_cli");
      table.boolean("situac_cli");
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClientesSchema;
