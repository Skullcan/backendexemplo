"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Paises = global.use("App/Models/Pais");

/**
 * Resourceful controller for interacting with pais
 */
class PaisController {
  /**
   * Show a list of all pais.
   * GET pais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Paises.all();
  }

  /**
   * Create/save a new pai.
   * POST pais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    const pais = await Paises.create(data);
    return pais;
  }

  /**
   * Display a single pai.
   * GET pais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const pais = await Paises.findOrFail(id);
    await pais.load("posts");
    return pais;
  }

  /**
   * Update pai details.
   * PUT or PATCH pais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;

    const pais = await Paises.findOrFail(id);
    await pais.merge(data);
    await pais.save();
    return pais;
  }

  /**
   * Delete a pai with id.
   * DELETE pais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const pais = await Paises.findOrFail(id);
    await pais.delete();
    return response.status(200).send("Pais excluido");
  }
}

module.exports = PaisController;
