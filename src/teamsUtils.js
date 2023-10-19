const fs = require('fs').promises;
const { join } = require('path');

const readTeamsFile = async () => {
  const path = '/files/teams.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllTeams = async () => {
  const allTeams = await readTeamsFile();
  return allTeams.teams;
};

module.exports = {
    getAllTeams,
};