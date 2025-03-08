module.exports = (sequelize, DataTypes) => {
  const lesson_files = sequelize.define(
    "lesson_files",
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "lesson_files",
      timestamps: true,
      paranoid: true,
    }
  );

  return lesson_files;
};
