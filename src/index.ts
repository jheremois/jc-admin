import express from "express";
import dotenv from "dotenv";

const app = express()

dotenv.config({path: './.env'})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import routes from "./router/index.routes";

app.use('/', routes())

app.set('port', process.env.PORT || 3000)

const port = app.get('port')

app.listen(port, ()=>{
    console.log(`Online on port ${port}`)
})