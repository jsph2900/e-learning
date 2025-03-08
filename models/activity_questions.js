module.exports = (sequelize, DataTypes) => {
  const activity_questions = sequelize.define(
    "activity_questions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct_answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "activity_questions",
      timestamps: true,
      paranoid: true,
    }
  );

  return activity_questions;
};
