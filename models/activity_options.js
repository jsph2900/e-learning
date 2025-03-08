module.exports = (sequelize, DataTypes) => {
  const activity_options = sequelize.define(
    "activity_options",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      activity_questions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      option_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "activity_options",
      timestamps: false,
    }
  );

  return activity_options;
};
