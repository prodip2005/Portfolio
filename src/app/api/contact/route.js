import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio");
        const contacts = await db.collection("contacts").find({}).toArray();
        return new Response(JSON.stringify(contacts), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch contacts" }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        const client = await clientPromise;
        const db = client.db("portfolio");

        if (Array.isArray(data)) {
            const result = await db.collection("contacts").insertMany(data);
            return new Response(JSON.stringify({ success: true, insertedCount: result.insertedCount }), { status: 201 });
        } else {
            const result = await db.collection("contacts").insertOne(data);
            return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), { status: 201 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to create contact(s)" }), { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("portfolio");
        const result = await db.collection("contacts").updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        return new Response(JSON.stringify({ success: true, modifiedCount: result.modifiedCount }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to update contact" }), { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("portfolio");
        const result = await db.collection("contacts").deleteOne({ _id: new ObjectId(id) });

        return new Response(JSON.stringify({ success: true, deletedCount: result.deletedCount }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to delete contact" }), { status: 500 });
    }
}
