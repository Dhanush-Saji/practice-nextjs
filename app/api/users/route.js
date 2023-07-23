import { connectDb } from "@/config/dbConfig"
import { NextResponse } from "next/server"

connectDb() //connecting to database
export async function GET(){
    const users = [{name: 'John', email: 'john@gmail.com'}]
    return NextResponse.json(users)
}
export async function POST(){

}
export async function DELETE(){

}
export async function PUT(){

}