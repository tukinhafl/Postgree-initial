const { Model, DataTypes } = require('sequelize')

class TurnoDeTrabalho extends Model {
  static init(sequelize) {
    super.init({
      dia_da_semana: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 7,
        }
      },
      start_at: DataTypes.STRING,
      stop_at: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = TurnoDeTrabalho;