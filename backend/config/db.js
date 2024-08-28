import mongoose from "mongoose"; 

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kumargautamsp:gautam123@cluster0.7h9wavg.mongodb.net/food-del')
    .then(()=> console.log("DB Connected"));
}