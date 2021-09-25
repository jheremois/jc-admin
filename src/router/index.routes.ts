import express, {Request, Response} from "express";
import controllers from "../controller/index.controller";
const router = express.Router()


const routes = () =>{
   
   router.post('/file', controllers.upload);

   return router
}

export default routes