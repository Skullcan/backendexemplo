"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  perfil() {
    return this.hasOne("App/Models/Perfil");
  }
}

module.exports = Cliente;
