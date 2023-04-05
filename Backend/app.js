require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');

const connectDB = (url) => {
    mongoose.connect(url);
    console.log(`connected successfully🟩`)
}

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/forms', formRoutes);

app.all('*', (req, res) => {
    res.send('Oops! Invalid request!');
});

const start = async (url) => {
    try {
        connectDB(url)
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start(process.env.MONGO_PASS);