import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//import expressFileUpload from "express-fileupload";

const app = express()


dotenv.config({path: './.env'})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//app.use(expressFileUpload())

import routes from "./router/index.routes";

app.use('/', routes())

app.set('port', process.env.PORT || 3000)

const port = app.get('port')

app.listen(port, ()=>{
    console.log(`Online on port ${port}`)
})

