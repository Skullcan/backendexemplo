"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
  up() {
    this.create("posts", table => {
      table.increments();
      table.string("titulo");
      table.string("corpo");
      table.int("cliente_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("posts");
  }
}

module.exports = PostSchema;
