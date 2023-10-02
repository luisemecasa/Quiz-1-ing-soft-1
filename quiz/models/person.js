const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  firtname: {
    type: "string",
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  address: {
    zip_code: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    municipality: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  pets: {
    type: Array,
    require: true,
  },
  work: [
    {
      id_work: {
        type: String,
        ref: "Work",
      },

      job: {
        type: String,
        require: true,
      },
      company: {
        id_company: {
          type: String,
          require: true,
        },
        company_name: {
          type: String,
          require: true,
        },
      },
    },
  ],
});
const Person = mongoose.model("Persons", personSchema);
module.exports = Person;
