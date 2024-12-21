import { getAllProductsService ,updateProductService,getProductDetailsService,createProductService,deleteProductService} from "../Service/products.js"

export async function getAllProductsController(req,res) {
    try{
        const fetching = await getAllProductsService()
        res.status(fetching.status).send(fetching)
    }
    catch(error){
        console.error("Error While fetching the Products from the DB",error)
        res.status(500).send(error.message)
    }
}

export async function updateProductController(req,res) {
    const {id} = req.params;
    console.log("id",id)
    const product = req.body
    try{
        
        const updating = await updateProductService(product,id)
        res.status(updating.status).send(updating.message)
    }
    catch(error){
        console.error("Error While updating the Product in the DB",error)
        res.status(500).send(error.message)
    }
}

export async function getProductDetailsController(req,res) {
    const {id} = req.params;
    try{
        const fetching = await getProductDetailsService(id)
        res.status(fetching.status).send(fetching)
        }
        catch(error){
            console.error("Error While fetching the Product Details from the DB",error)
            res.status(500).send(error.message)
        }
}

export async function createProductController(req,res) {
    const product = req.body
    try{
        const creating = await createProductService(product)
        res.status(creating.status).send(creating)
        }
        catch(error){
            console.error("Error While creating the Product in the DB",error)
            res.status(500).send(error.message)
        }
    
}

export async function deleteProductController(req,res) {
    const  { id} = req.params
    try{
        const deleting = await deleteProductService(id)
        res.status(deleting.status).send(deleting)
        }
        catch(error){
            console.error("Error While deleting the Product from the DB",error)
            res.status(error.status).send(error.message)
        }
    
}