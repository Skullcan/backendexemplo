"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Carro extends Model {
  clientes() {
    return this.belongsToMany("App/Models/Cliente");
  }
}

module.exports = Carro;
