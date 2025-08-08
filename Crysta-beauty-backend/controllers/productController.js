export function createProduct(req, res) {
    if (!req.user) {
        return res.status(403).json({ message: "You need to login first" });
    }

    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "You are not authorized to create a product" });
    }

    const product = new Product(req.body);

    product.save()
        .then(() => {
            res.json({ message: "Product saved successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Product not saved" });
        });
}
