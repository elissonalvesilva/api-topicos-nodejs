'use strict'
const upload = require('../util/storage.util');

module.exports = app => {

    let controller = require('../controllers/empresa.controller');


    app.route('/v1/empresas');

    app.route('/v1/empresas/:id');




};