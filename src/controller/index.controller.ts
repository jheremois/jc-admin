import {Request, Response} from "express";
import multer from "multer";
import * as fs from "fs";

class Controllers {

    private main = "C:/Users/jhere/Desktop/"

    public filesListPath = async (req: Request, res: Response)=>{

        const paths: any = []

        const reference: any = `C:/Users/jhere/Desktop/${req.params.path}`
        
        await fs.readdir(reference.replace('-', '/'), async(err, files) => {
            await files.forEach(element => {
                paths.push(element)
            });

            res.send(paths)
        })
        
        
    }

    public filesList = async (req: Request, res: Response)=>{

        const paths: any = []

        await fs.readdir(`${this.main}`, async(err, files) => {
            await files.forEach(element => {
                paths.push(element)
                console.log(paths);
            });

            res.send(paths)
        })
        
    }
    


    // controllador de subida de archivos: 
    public upload = (req: any, res: any) => {

        const storageEngine = multer.diskStorage({
            destination:  "C:/Users/jhere/Desktop/",// Roy Que esta ruta sea un parametro, que el req.body.lo-que-sea sea quien deciada donde se guardara el archivo
            filename:  (req, file, cb) => {
                cb(null, file.originalname);
            }
        })
        
        const uploadImage = multer({
            storage: storageEngine,
            limits: {fileSize: 100000000}
        }).single('image');
        
        uploadImage(req, res, (err) => {
            if (err) {
                err.message = 'The file is so heavy for my service';
                return res.send(err);
            }
        
            console.log(req.file);
            res.send(req.file);
        
        });
    
    }
    

}

export const controller = new Controllers()
