import { NextResponse } from "next/server"

export async function DELETE(request,{params}){
    const {userId,postId} = params
    return NextResponse.json({userId,postId})
}