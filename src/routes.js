const express = require('express')
const CalendarController = require('./controllers/CalendarController')
const TurnController = require('./controllers/TurnController')
const WorkTurnController = require('./controllers/WorkTurnController')

const routes = express.Router()

routes.get('/calendar/list', CalendarController.index)
routes.get('/shifts/list', TurnController.index)
routes.get('/workShift/list', WorkTurnController.index)

routes.post('/workShift/create', WorkTurnController.store)
// routes.put('/workShift/update/:id', WorkTurnController.update)



module.exports = routes