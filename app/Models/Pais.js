"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Pais extends Model {
  static get table() {
    return "paises";
  }

  posts() {
    return this.manyThrough("App/Models/Cliente", "posts", "id", "pais_id");
  }
}

module.exports = Pais;
