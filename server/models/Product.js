import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
    
});


ProductSchema.plugin(mongooseSequence(mongoose), { inc_field: 'id' });

const ProductModel = mongoose.model("Product", ProductSchema);

export { ProductModel };
