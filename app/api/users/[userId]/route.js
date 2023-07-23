import { UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    const id = params.userId
    try {
        await UserModel.findByIdAndDelete({_id:id})
        return NextResponse.json({success: true},{status: 200})
    } catch (error) {
        return NextResponse.json({error: error.message},{status:400})
    }
}
export async function PUT(request,{params}){
    const id = params.userId
    const reqBody = await request.json()
    const {name} = reqBody
    try {
        await UserModel.findByIdAndUpdate(id,{name})
        return NextResponse.json({success: true},{status: 200})
    } catch (error) {
        return NextResponse.json({error: error.message},{status:400})
    }
}