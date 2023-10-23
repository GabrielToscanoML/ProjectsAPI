/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes}  DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
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
