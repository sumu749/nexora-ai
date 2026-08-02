import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const email = typeof body.email === "string" ? body.email.trim() : "";

        if (!email) {
            return NextResponse.json(
                { error: "Email is required." },
                { status: 400 },
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 },
            );
        }

        // TODO: Persist subscription to a database or newsletter provider.
        return NextResponse.json({ message: "Subscribed successfully." });
    } catch (error) {
        return NextResponse.json(
            { error: "Unable to process newsletter subscription." },
            { status: 400 },
        );
    }
}
