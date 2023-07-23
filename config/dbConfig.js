import mongoose from "mongoose"

export const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"practise_nextjs",
        })
        console.log('db connected')
    } catch (error) {
        console.log(error)
    }
}