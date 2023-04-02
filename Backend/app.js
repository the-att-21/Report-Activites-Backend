require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

    ;
const connectDB = (url) => {
    mongoose.connect(url);
    console.log(`connected successfully🟩`)
}

app.use(express.json());
app.use('/users', userRoutes);


app.all('*', (req, res) => {
    res.send('Oops 404!');
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