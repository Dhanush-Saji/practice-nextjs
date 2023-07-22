import { NextResponse } from "next/server"

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