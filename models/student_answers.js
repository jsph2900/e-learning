module.exports = (sequelize, DataTypes) => {
  const student_answers = sequelize.define(
    "student_answers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activity_questions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "student_answers",
      timestamps: true,
      updatedAt: false,
      paranoid: true,
      createdAt: "answer_date",
    }
  );

  return student_answers;
};
