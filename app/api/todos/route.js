import { NextResponse } from "next/server"

export async function POST(request){
    const path = request.nextUrl.pathname
    const query = request.nextUrl.searchParams
    const method = request.method

    //converting the query object to json
    const queryObj = Object.fromEntries(query.entries());
    return NextResponse.json({method,path,...queryObj})
}