import express from "express"; 
import { getAllProductsController ,updateProductController,getProductDetailsController,createProductController,deleteProductController} from "../Controller/products.js";

const router = express.Router()

router.get("/allProducts",getAllProductsController)

router.put("/updateProduct/:id",updateProductController)

router.get("/getProductDetails/:id",getProductDetailsController)

router.post("/createProduct",createProductController)

router.delete("/deleteProduct/:id",deleteProductController)

export {router as routes}