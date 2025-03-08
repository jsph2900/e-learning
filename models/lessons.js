module.exports = (sequelize, DataTypes) => {
  const lessons = sequelize.define(
    "lessons",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "lessons",
      timestamps: true,
      paranoid: true,
    }
  );

  return lessons;
};
