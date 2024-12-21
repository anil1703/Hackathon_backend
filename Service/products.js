import { ItemDb } from "../Modal/index.js";
import { v4 as uuidv4 } from 'uuid'; 



export async function getAllProductsService() {
    try{
        const response = await ItemDb.find();
        console.log(response)
        return{
            status: 200,
            data: response,
            message: "Products retrieved successfully"
        }
    }
    catch(error){
        return{
            status: 500,
            message: "Error retrieving products"
            }
    }
}

export async function updateProductService(product, id) {
    console.log("Updated product:", product);
    try {
       
        const response = await ItemDb.findOneAndUpdate(
            { ItemId: id },           
            { $set: product },        
            { new: true }            
        );

        if (!response) {
            return {
                status: 404,
                message: "Product not found"
            };
        }

        return {
            status: 200,
            data: response,
            message: "Product updated successfully"
        };
    } catch (error) {
        console.error("Error updating product:", error);
        return {
            status: 500,
            message: "Error updating product"
        };
    }
}


export async function getProductDetailsService(id) {
    try {
        const response = await ItemDb.findOne({ ItemId: id });
        if (!response) {
            return {
                status: 404,
                message: "Product not found"
                };
                }
                return {
                    status: 200,
                    data: response,
                    message: "Product retrieved successfully"
                    };
                    } catch (error) {
                        console.error("Error retrieving product:", error);
                        return {
                            status: 500,
                            message: "Error retrieving product"
                            };
                            }
    
}

export async function createProductService(product) {
    try {
        console.log("Product Details:", product);

        // Create a 4-digit ID from UUID
        const thatUuid = uuidv4().slice(0, 4);

        // Add the generated ItemId to the product object
        const productWithId = { ...product, ItemId: thatUuid };

        // Insert the product into the database using mongoose
        const response = await ItemDb.create(productWithId);

        return {
            status: 201,
            data: response,
            message: "Product created successfully",
        };
    } catch (error) {
        console.error("Error creating product:", error);
        return {
            status: 500,
            message: "Error creating product",
        };
    }
}


export async function deleteProductService(id) {
    try {
      
        const response = await ItemDb.deleteOne({ ItemId: id });
        return {
            status: 200,
            data: response,
            message: "Product deleted successfully",
            };
            } catch (error) {
                console.error("Error deleting product:", error);
                return {
                    status: 500,
                    message: "Error deleting product",
                    };
                    }
    
}