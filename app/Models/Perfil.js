"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Perfil extends Model {
  cliente() {
    return this.belongsTo("App/Models/Cliente");
  }
}

module.exports = Perfil;
