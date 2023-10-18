import delay from "@/delay"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic";

export interface User {
    id: number
    name: string
    age: number
}

const simpleUser: User[] = [{
    id: 1,
    name: 'simple',
    age: 1
}]

export async function GET() {

await delay(3)
   
  return NextResponse.json(simpleUser)
}