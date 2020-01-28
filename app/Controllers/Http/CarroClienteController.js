"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CarroClientes = global.use("App/Models/CarroCliente");
/**
 * Resourceful controller for interacting with clientecarros
 */
class CarroClienteController {
  /**
   * Show a list of all clientecarros.
   * GET clientecarros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await CarroClientes.all();
  }

  /**
   * Create/save a new clientecarro.
   * POST clientecarros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    const carroCliente = await CarroClientes.create(data);
    return carroCliente;
  }

  /**
   * Display a single clientecarro.
   * GET clientecarros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const carroCliente = await CarroClientes.findOrFail(id);
    return carroCliente;
  }

  /**
   * Update clientecarro details.
   * PUT or PATCH clientecarros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const carroCliente = await CarroClientes.findOrFail(id);
    await carroCliente.merge(data);
    await carroCliente.save();
    return carroCliente;
  }

  /**
   * Delete a clientecarro with id.
   * DELETE clientecarros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const carroCliente = await CarroClientes.findOrFail(id);
    await carroCliente.delete();
    return response.status(200).send("CarroCliente excluido");
  }
}

module.exports = CarroClienteController;
