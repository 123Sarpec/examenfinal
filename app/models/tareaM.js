module.exports = (sequelize, Sequelize) => {
  const Tareas = sequelize.define('proyecto', {
      titulo: {
          type: Sequelize.STRING,
          allowNull: false, 
      },
      descripcion: {
          type: Sequelize.TEXT, 
          allowNull: true,
      },
      completada: {
          type: Sequelize.BOOLEAN, 
          defaultValue: false,
      },
      fecha_creacion: {
          type: Sequelize.DATE, 
          defaultValue: Sequelize.NOW,
      },
      fecha_vencimiento: {
          type: Sequelize.DATE, 
          allowNull: true,
      },
      prioridad: {
          type: Sequelize.ENUM('baja', 'media', 'alta'), 
          defaultValue: 'media',
      },
      asignado_a: {
          type: Sequelize.STRING, 
          allowNull: true,
      },
      categoria: {
          type: Sequelize.STRING, 
          allowNull: true,
      },
      Costo_proyecto: {
          type: Sequelize.FLOAT, 
          allowNull: false,
      },
      Pagado: {
          type: Sequelize.BOOLEAN, 
          defaultValue: false,
      }
  });

  return Tareas;
}
