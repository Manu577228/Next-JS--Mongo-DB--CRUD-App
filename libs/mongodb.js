import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongo-DB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;