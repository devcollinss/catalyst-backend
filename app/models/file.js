// app/models/file.js
class File {
    constructor(id, name, content, vector) {
      this.id = id;
      this.name = name;
      this.content = content;
      this.vector = vector;
    }
  }
  
  module.exports = File;