import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const headerList = headers();
  const type = headerList.get("Content-Type");

  // redirect('/blog')

  return NextResponse.json({ id });
}
