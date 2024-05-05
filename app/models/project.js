// app/models/project.js
class Project {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.files = [];
    }
  
    addFile(file) {
      this.files.push(file);
    }
  }
  
  module.exports = Project;