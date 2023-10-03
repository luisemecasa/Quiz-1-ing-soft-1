const mongoose = require("mongoose");
const workerSchema = mongoose.Schema({
  firtname: {
    type: "string",
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  work: [{
      id_work : {
        type: String,
        ref: "Work",
      },

      name_work : {
        type: String,
        require: true,
      }
    }],
  type_document: {
    type: String,
    require: true,
  },
  document_number:{
    type: String,
    require: true,
    unique: true,
  }
  
});
const Worker = mongoose.model("Worker", workerSchema);
module.exports = Worker;
