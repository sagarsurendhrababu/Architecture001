const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRouter = require('./Routers/userRouter');

dotenv.config();
const app = express();
const PORT = process.env.POST || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use("/", userRouter)

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
