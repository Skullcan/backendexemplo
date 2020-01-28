"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PaisSchema extends Schema {
  up() {
    this.create("paises", table => {
      table.increments();
      table.string("nome");
      table.timestamps();
    });
  }

  down() {
    this.drop("paises");
  }
}

module.exports = PaisSchema;
