import express from 'express';
import bodeParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const URL = 'mongodb+srv://admin:DHGLWM5x5hTAlQZs@blogapp.r33bv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.port || 5000;

app.use(bodeParser.json({limit : '30mb'}));
app.use(bodeParser.urlencoded({extends : true, limit : '30mb'}));
app.use(cors());
app.use('/posts', posts)


// promise
mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        });
    }).catch(err => {
        console.log('err', err)
    });