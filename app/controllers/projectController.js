// app/controllers/projectController.js
const projectService = require('../services/projectService');

const projectController = {
  createProject: (req, res) => {
    const { name, description } = req.body;
    const project = projectService.createProject(name, description);
    res.status(201).json(project);
  },

  getProjects: (req, res) => {
    const projects = projectService.getProjects();
    res.json(projects);
  },
};

module.exports = projectController;