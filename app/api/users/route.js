import { connectDb } from "@/config/dbConfig"
import { UserModel } from "@/models/user.model"
import { NextResponse } from "next/server"

connectDb() //connecting to database
export async function GET(){
    try {
        const users = await UserModel.find({}).select('-password')
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error: error})
    }
   
}
export async function POST(req){
    try {
        const reqBody = await req.json()
        const {name,email,password} = reqBody
        const user = await UserModel.findOne({email})
        if(user){
            return NextResponse.json({error:'User already exists'},{status:400})
        }
        const newUser = await UserModel(reqBody)
        const savedUser = await newUser.save()
        return NextResponse.json({message:'User saved',savedUser},{status:200})
        
    } catch (error) {
        return NextResponse.json({ error: error})
    }
}
export async function DELETE(){

}
export async function PUT(){

}