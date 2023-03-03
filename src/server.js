const mongoose  = require("mongoose ");
const express = require("express");
const cors = require("cors");

const FormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
  });



const Receiver = mongoose.model('Receiver', FormSchema);

const app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("dev"));

app.use(cors());

app.use("/api/form", require("./api/form"));
app.post('/Recivers', async (req, res) => {
    const { name, email } = req.body;
  
      const receiver = await Receiver.create({ name, email });
      res.json(Receiver);
   
  });
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;