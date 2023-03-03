const db = require("../db");


const Form = db.model("Form", {
    name: { type: String, required: true },
    email:     { type: String, required: true }
 });
 
 module.exports = Form;