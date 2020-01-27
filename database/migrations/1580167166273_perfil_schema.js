"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PerfilSchema extends Schema {
  up() {
    this.create("perfils", table => {
      table.increments();
      table.integer("cliente_id");
      table.string("email");
      table.string("site");
      table.timestamps();
    });
  }

  down() {
    this.drop("perfils");
  }
}

module.exports = PerfilSchema;
