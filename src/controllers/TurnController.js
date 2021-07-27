const Turno = require('../models/Turno')

module.exports = {
  index(req, res) {
    const turns = Turno.findAll()

    return res.json(turns)
  }
}