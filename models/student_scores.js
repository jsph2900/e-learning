module.exports = (sequelize, DataTypes) => {
  const student_scores = sequelize.define(
    "student_scores",
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
      activities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "student_scores",
      timestamps: true,
      paranoid: true,
      updatedAt: false,
    }
  );

  return student_scores;
};
