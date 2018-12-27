import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
require('dotenv').config()

import filmRoutes from './api/routes/films'
import userRoutes from './api/routes/users'

const app = express()

const DBNAME = process.env.DB_USER 
const DBPASSWORD = process.env.DB_PASS


mongoose.connect(`mongodb://${DBNAME}:${DBPASSWORD}@ds157422.mlab.com:57422/filmbase`, {useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/films', filmRoutes)
app.use('/users', userRoutes)


export default app;