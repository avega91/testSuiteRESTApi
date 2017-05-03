/**
 * Proyecto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = function () {
  let thinky = this.thinky;
  let validator = require('validator');
  let type = this.thinky.type;
  let models = this.models;

  return {

    tableName: "proyecto",
    schema: {
      id: type.string(),
      titulo: type.string().required(),
      descripcion: type.string(),
      createdAt: type.date().default(new Date())
    },
    options: {},

    // set up any relationships, indexes or function definitions here
    init: function (model) {

    }

  };
};