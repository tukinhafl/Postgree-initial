const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Calendario = require('../models/Calendario')
const TurnoDeTrabalho = require('../models/TurnoDeTrabalho')

const connection = new Sequelize(dbConfig)

Calendario.init(connection)
TurnoDeTrabalho.init(connection)

module.exports = connection
