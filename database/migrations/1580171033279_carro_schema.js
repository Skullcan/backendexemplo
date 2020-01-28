"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CarroSchema extends Schema {
  up() {
    this.create("carros", table => {
      table.increments();
      table.string("modelo");
      table.string("ano");
      table.timestamps();
    });
  }

  down() {
    this.drop("carros");
  }
}

module.exports = CarroSchema;
