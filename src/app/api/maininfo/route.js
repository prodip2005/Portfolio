import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        // "mainInfo" কালেকশন থেকে ডাটা রিড করবে
        const info = await db.collection("mainInfo").findOne({});

        return NextResponse.json(info || { message: "No info found" });
    } catch (e) {
        return NextResponse.json({ error: "Failed to fetch main info" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        const result = await db.collection("mainInfo").updateOne(
            {},
            {
                $set: {
                    name: body.name,
                    image: body.image,
                    description: body.description,
                    resume: body.resume,
                    roadmap: body.roadmap,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("POST API Error:", e);
        return NextResponse.json({ error: "Failed to update main info", details: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        // শুধুমাত্র বডিতে আসা ডেটা আপডেট করবে
        const result = await db.collection("mainInfo").updateOne(
            {},
            { $set: { ...body, updatedAt: new Date() } }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("PUT API Error:", e);
        return NextResponse.json({ error: "Failed to update main info", details: e.message }, { status: 500 });
    }
}

export async function DELETE() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        // পুরো ডকুমেন্ট মুছে ফেলবে
        const result = await db.collection("mainInfo").deleteOne({});

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("DELETE API Error:", e);
        return NextResponse.json({ error: "Failed to delete main info", details: e.message }, { status: 500 });
    }
}