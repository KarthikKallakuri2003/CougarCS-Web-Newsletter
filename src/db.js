const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/form_db");
module.exports = mongoose;

