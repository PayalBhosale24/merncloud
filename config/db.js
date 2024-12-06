import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://payalbhosale2507:Payal%401225@cluster0.ycn1i.mongodb.net/", { useNewUrlParser: true })
        console.log(`Connected to Database Successfully`);
    } catch (error) {
        console.log('Disconnected', error);
    }
}

export default Connection;