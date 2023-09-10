import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const query =searchParams.get('q')
    let curentPost = posts;

    query ? curentPost = posts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : null;
    return NextResponse.json(curentPost)
}

export async function POST(req: Request) {
    
    const body = await req.json()

    
    return NextResponse.json({body})
}