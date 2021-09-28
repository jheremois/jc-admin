import express, {Request, Response} from "express";
import {controller} from "../controller/index.controller"; "../controller/index.controller";
const router = express.Router()

const routes = () =>{
   
   // Ruta de subida de archivos:
   router.post('/file', controller.upload);

   router.get('/files', controller.filesList)
   router.get('/files/:path?', controller.filesListPath)

   return router
}

export default routes