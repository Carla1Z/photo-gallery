const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotenv.config();

const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
};

app.get("/photos", async (req, res) => {
  const response = await axios.get(
    `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`,
    {
      auth,
    }
  );
  return res.send(response.data);
});

const PORT = 3001;

app.listen(PORT, console.log(`Server is listening in Port ${PORT}`));
