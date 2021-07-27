const TurnoDeTrabalho = require('../models/TurnoDeTrabalho')

module.exports = {
  index(req, res) {
    const workTurns = TurnoDeTrabalho.findAll()

    return res.json(workTurns)
  },

  store(req, res) {
    const { dia_da_semana, start_at, stop_at } = req.body

    const workPost = TurnoDeTrabalho.create({ dia_da_semana, start_at, stop_at })
    
    return res.json(workPost) 
  }

  // update(req, res) {
  //   const { id } = req.params
  //   const { dia_da_semana, start_at, stop_at } = req.body

  //   const upWork = TurnoDeTrabalho.findByPk(id)

  //   if (!upWork) {
  //     return res.status(400).json({ error: "Not found" })
  //   }

  //   const upWorkFlow = TurnoDeTrabalho.create({

  //   })
  // }
}