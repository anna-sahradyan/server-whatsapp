import mongoose from 'mongoose';
import dotenv  from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false)
const start = async () => {

    try {

        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected`)
    } catch (err) {

        console.log(err);
        process.exit(1);
    }

}

export default start;
