const ProjectModel = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      category: DataTypes.STRING,
      github: DataTypes.STRING,
      deploy: DataTypes.STRING,
    });
  
    return Project;
  };
  
  module.exports = ProjectModel;