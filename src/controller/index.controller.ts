import multer from "multer";

var uploading = (origin: string, req: any, res: any) =>{

    const storageEngine = multer.diskStorage({
        destination:  origin,
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
        res.send(req.body);

    });

}

const upload = (req: any, res: any) => {
      
    uploading("C:/Users/jhere/Desktop/lolo", req, res)

}

const controllers ={
    upload,
}

export default controllers