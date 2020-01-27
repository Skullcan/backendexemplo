"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Perfils = global.use("App/Models/Perfil");
/**
 * Resourceful controller for interacting with perfils
 */
class PerfilController {
  /**
   * Show a list of all perfils.
   * GET perfils
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    return await Perfils.all();
  }

  /**
   * Create/save a new perfil.
   * POST perfils
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    const perfil = await Perfils.create(data);
    return perfil;
  }

  /**
   * Display a single perfil.
   * GET perfils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const perfil = await Perfils.findOrFail(id);
    return perfil;
  }

  /**
   * Update perfil details.
   * PUT or PATCH perfils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const perfil = await Perfils.findOrFail(id);

    const data = request.all();
    await perfil.merge(data);
    await perfil.save();
    return perfil;
  }

  /**
   * Delete a perfil with id.
   * DELETE perfils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const perfil = await Perfils.findOrFail(id);
    await perfil.delete();
    return response.status(200).send("Pefil Excluido");
  }
}

module.exports = PerfilController;
