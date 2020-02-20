"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Users = global.use("App/Models/User");

class UserController {
  async index() {
    return Users.all();
  }

  async store({ request, response }) {
    const data = request.only(["username", "email", "password", "id"]);

    const userAlreadyExists = await Users.findBy("email", data.email);
    if (userAlreadyExists) {
      return response.status(406).send("Usuário já existe.");
    }

    const user = await Users.create(data);

    return user;
  }

  async show({ params, response }) {
    const user = await Users.findBy("email", params.id);
    if (user === null) return response.status(404).send("Usuário não existe.");

    return user;
  }

  async update({ params, request, auth, response }) {
    const email = params.id;
    const user = await Users.findBy("email", email);

    if (user === null) return response.status(404).send("Usuário não existe.");

    const data = request.all();

    await user.merge(data);
    await user.save();

    return response.status(200).send("Usuário atualizado.");
  }

  async destroy({ params, auth, response }) {
    const user = await Users.findBy("email", params.id);

    if (user === null) return response.status(404).send("Usuário não existe.");

    if (user.id === auth.user.id) {
      return response
        .status(406)
        .send("Não é possivel excluir o próprio usuário.");
    }

    await user.delete();

    return response.status(200).send("Usuário excluído.");
  }
}

module.exports = UserController;
