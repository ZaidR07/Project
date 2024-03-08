import express from "express";
import { ProductModel } from "../models/Product.js";
import multer from "multer";
import path from "path";

const Productrouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Productimages')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage });


Productrouter.post("/Productadd", upload.single('file'), async (req, res) => {
  const { name, price, description, link} = req.body;
  const image = req.file.filename;
  console.log(image);
  try {
    const newProduct = new ProductModel({
      name,
      price,
      description,
      image,
      link

    });
    await newProduct.save();


  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
})

Productrouter.get("/Productget",async (req,res)=>{
  const product = await ProductModel.find();
  console.log("Check this : " + product);
  return res.json(product);

})

export { Productrouter };