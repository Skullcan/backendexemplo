"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CarroClienteSchema extends Schema {
  up() {
    this.create("carro_clientes", table => {
      table.increments();
      table.integer("cliente_id");
      table.integer("carro_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("carro_clientes");
  }
}

module.exports = CarroClienteSchema;
