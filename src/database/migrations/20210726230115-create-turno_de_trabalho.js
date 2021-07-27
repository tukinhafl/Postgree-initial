'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turno_de_trabalho', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_calendario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'calendarios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_turno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'turnos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      dia_da_semana: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stop_at: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('turno_de_trabalho')
  }
};