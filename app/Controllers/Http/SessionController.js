/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Users = global.use("App/Models/User");

class SessionController {
  /**
   * Update dadocard details.
   * PUT or PATCH dadocards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create({ request, auth, response }) {
    const { email, password } = request.all();

    const user = await Users.findBy("email", email);
    const msgErroLogin = "Usuário ou senha inválidos.";

    if (user === null) {
      return response.status(401).send(msgErroLogin);
    }

    if (user.length === 0) {
      return response.status(401).send(msgErroLogin);
    }

    try {
      const token = await auth.attempt(email, password);

      return token;
    } catch (err) {
      return response.status(401).send(err);
    }
  }

  async revogaTokens({ request, auth, response }) {
    const { email } = request.all();

    try {
      const user = await Users.findBy("email", email);
      if (user.length === 0) {
        return response.status(401).send("Usuário não existe.");
      }

      await auth.authenticator("jwt").revokeTokensForUser(user, true);
      return response.status(200).send("Tokens revogados com sucesso");
    } catch (err) {
      return response.status(401).send(err);
    }
  }
}

module.exports = SessionController;
