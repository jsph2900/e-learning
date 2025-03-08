module.exports = (sequelize, DataTypes) => {
  const activities = sequelize.define(
    "activities",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      lessons_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activity_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "activities",
      timestamps: true,
      paranoid: true,
    }
  );

  return activities;
};
