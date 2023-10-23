const ProjectService = require('../services/project.service');

const getAll = async (_req, res) => {
  try {
    const projects = await ProjectService.getAll();
    return res.status(200).json(projects);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};