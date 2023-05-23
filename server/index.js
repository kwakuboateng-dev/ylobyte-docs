//server

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

const DB ="mongodb+srv://ylobyte-admin:1Nc0dew3trust$$@ylobytecluster0.safxajc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
  console.log("Connection successful!! 😊");
})
.catch((err) => {
  console.log(err, " Connection failed. 😢");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
