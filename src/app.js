const express = require('express');

const teamsUtils = require('./teamsUtils');

const app = express();
app.use(express.json());

// let teams = [
//     {
//       id: 1,
//       name: 'São Paulo Futebol Clube',
//       initials: 'SPFC',
//     },
//     {
//       id: 2,
//       name: 'Clube Atlético Mineiro',
//       initials: 'CAM',
//     },
//   ];

// app.get('/teams/:id', (req, res) => {
//     const { id } = req.params;
//     const teamExists = teams.find((team) => team.id === Number(id));
//     if (!teamExists) {
//         return res.status(404).json({ message: 'Team not found' });
//     }
//     res.status(200).json({ teamExists });
// });
app.get('/teams', async (req, res) => {
  const teams = await teamsUtils.getAllTeams();
  res.status(200).json({ teams });
});

// app.post('/teams', (req, res) => {
//     const newTeam = { ...req.body };
//     teams.push(newTeam);
  
//     res.status(201).json({ team: newTeam });
// });

// app.put('/teams/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, initials } = req.body;
  
//     const updateTeam = teams.find((team) => team.id === Number(id));
  
//     if (!updateTeam) {
//       return res.status(404).json({ message: 'Team not found' });
//     }
  
//     updateTeam.name = name;
//     updateTeam.initials = initials;
//     res.status(200).json({ updateTeam });
// });
// app.delete('/teams/:id', (req, res) => {
//     const { id } = req.params;
//     const teamsLength = teams.length;
//     teams = teams.filter((team) => team.id !== Number(id));
//     if (teamsLength === teams.length) {
//         return res.status(404).json({ message: 'Team not found' });
//     }
//     res.status(200).end();
// });

module.exports = app;
