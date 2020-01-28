"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  perfil() {
    return this.hasOne("App/Models/Perfil");
  }
  posts() {
    return this.hasMany("App/Models/Post");
  }
  carros() {
    return this.belongsToMany("App/Models/Carro").pivotTable("carro_clientes");
  }
}

module.exports = Cliente;
