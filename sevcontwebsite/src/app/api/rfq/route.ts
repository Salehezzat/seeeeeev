import { NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validations/rfq";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = rfqSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: wire to email/CRM delivery (e.g. Resend, HubSpot) once credentials
  // are available. For now the submission is validated and acknowledged.
  console.info("RFQ submission received:", parsed.data);

  return NextResponse.json({ ok: true });
}
