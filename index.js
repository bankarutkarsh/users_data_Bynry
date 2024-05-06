const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./Routes/routes');
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
    origin: "https://user-mapping.vercel.app/",
    credentials: true,
    optionSuccessStatus:200
};

app.use(cors(corsOptions));
app.use(bodyParser.json())

app.use('/',routes);


dotenv.config();

const PORT = process.env.PORT || 5500;
const hostname = 'localhost';

mongoose.connect(process.env.ATLAS_URL);

app.listen(PORT,hostname,()=>{
    console.log(`Server is running at ${hostname}: ${PORT}`)
})