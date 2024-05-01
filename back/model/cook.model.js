import mongoose from "mongoose";

const cookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Cook = mongoose.model("Cook", cookSchema);

export default Cook;