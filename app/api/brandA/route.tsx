import { NextResponse } from "next/server";

export async function GET(request:any) {
  fetch('https://dummyjson.com/products')
  console.log(request)
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
  return new Response("This is a new API route");
}

// export async function POST(request) {
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }