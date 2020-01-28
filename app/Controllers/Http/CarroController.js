"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Carros = global.use("App/Models/Carro");

/**
 * Resourceful controller for interacting with carros
 */
class CarroController {
  /**
   * Show a list of all carros.
   * GET carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Carros.all();
  }

  /**
   * Create/save a new carro.
   * POST carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    const carro = await Carros.create(data);
    return carro;
  }

  /**
   * Display a single carro.
   * GET carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const carro = await Carros.findOrFail(id);
    return carro;
  }

  /**
   * Update carro details.
   * PUT or PATCH carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const carro = await Carros.findOrFail(id);
    await carro.merge(data);
    await carro.save();
    return carro;
  }

  /**
   * Delete a carro with id.
   * DELETE carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const carro = await Carros.findOrFail(id);
    await carro.delete();
    return response.status(200).send("Carro excluido");
  }
}

module.exports = CarroController;
