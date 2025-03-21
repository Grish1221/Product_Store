app.delete("/api/products/:id", async(req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndRemove(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        
    }
})