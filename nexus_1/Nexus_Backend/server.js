require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

const controller = require("./controller.js");

app.post('/',controller.AddBorrower);
app.get('/get',controller.getAllBorrow);

const SERVER_DB_URI=process.env.DB_URI;
const PORT = process.env.PORT || 3000;
const bootstrap = async () => {
  try {
    await mongoose.connect(SERVER_DB_URI);
    app.listen(PORT, async () => {
      console.log("Listening at ",PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
