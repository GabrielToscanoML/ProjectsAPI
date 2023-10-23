const { Project } = require('../models');

const getAll = async () => {
    const projects = await Project.findAll();
    return projects;
  };
  
  module.exports = {
    getAll,
  };