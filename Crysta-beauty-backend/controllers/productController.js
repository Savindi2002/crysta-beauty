import Product from "../models/product.js";
export function createProduct(req, res) {
    const product = new Product(req.body);

    product.save()
        .then(() => {
            res.status(201).json({
                message: "Product created successfully"
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Product not saved",
                error: err.message
            });
        });
}


export function getProducts(req, res) {
    Product.find().then(
        (products)=>{
            res.json(products)
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message: "Product not found"
            })
        }
    )
}


export function deleteProduct(req, res) {
    if(req.user == null){
        res.status(403).json({
            message:"you need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message:"you are not authorized to delete a product"
        })
        return;
    }


    Product.findOneAndDelete({
        productId:req.params.productId
    }).then(
        ()=>{
            res.json({
            message:"Product deleted successfully"
        })
    }
).catch(
        (err)=>{
            res.status(500).json({
                message: "Product not deleted"  
            })
        }
    )
}

export function updateProduct(req, res) {   
    if(req.user == null){   
        res.status(403).json({   
            message:"you need to login first"   
        })
        return;
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message:"you are not authorized to delete a product"
        })
        return;
    }

    Product.findOneAndUpdate({
        productId:req.params.productId
    },req.body).then(
        ()=>{
            res.json({
            message:"Product updated successfully"
        })
    }
).catch(
        (err)=>{
            res.status(500).json({
                message: "Product not updated"  
            })
        }
    )

}
