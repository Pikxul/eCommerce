import express from 'express';
import { listProduct, addProduct, removeProduct, singleProduct } from "../controllers/productController.js";
import upload from '../middleware/multer.js';

const productRouter = express.Router();

// Use POST for adding a product with file uploads
productRouter.post('/add', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct);

productRouter.get('/remove', removeProduct);
productRouter.get('/single', singleProduct);
productRouter.get('/list', listProduct);

export default productRouter;