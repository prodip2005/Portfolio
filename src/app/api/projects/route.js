import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        const projects = await db.collection("projects").find({}).sort({ _id: -1 }).toArray();

        return NextResponse.json(projects.length > 0 ? projects : []);
    } catch (e) {
        console.error("GET Projects API Error:", e);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        // Add automatic creation date
        if (Array.isArray(body)) {
            const mappedBody = body.map(item => ({ ...item, createdAt: new Date() }));
            await db.collection("projects").deleteMany({});
            const result = await db.collection("projects").insertMany(mappedBody);
            return NextResponse.json({ success: true, result });
        }

        const newEntry = { ...body, createdAt: new Date() };
        const result = await db.collection("projects").insertOne(newEntry);
        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("POST Projects API Error:", e);
        return NextResponse.json({ error: "Failed to update projects", details: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        if (!body.title) {
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }

        const result = await db.collection("projects").updateOne(
            { title: body.title },
            {
                $set: {
                    image: body.image,
                    type: body.type,
                    date: body.date,
                    description: body.description,
                    tags: body.tags,
                    github: body.github,
                    live: body.live
                }
            }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("PUT Projects API Error:", e);
        return NextResponse.json({ error: "Failed to update projects" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title');

        if (title) {
            const result = await db.collection("projects").deleteOne({ title });
            return NextResponse.json({ success: true, result });
        } else {
            const result = await db.collection("projects").deleteMany({});
            return NextResponse.json({ success: true, result });
        }
    } catch (e) {
        console.error("DELETE Projects API Error:", e);
        return NextResponse.json({ error: "Failed to delete projects" }, { status: 500 });
    }
}
