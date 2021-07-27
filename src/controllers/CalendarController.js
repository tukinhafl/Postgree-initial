const Calendario = require('../models/Calendario')

module.exports = {
  index(req, res) {
    const calendars = Calendario.findAll()

    return res.json(calendars)
  }
}