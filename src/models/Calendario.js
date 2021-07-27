const { Model, DataTypes } = require('sequelize')

class Calendario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Calendario