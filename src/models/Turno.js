const { Model, DataTypes } = require('sequelize')

class Turno extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Turno