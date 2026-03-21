import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        // "skills" কালেকশন থেকে ডাটা রিড করবে
        const skills = await db.collection("skills").find({}).toArray();

        return NextResponse.json(skills.length > 0 ? skills : []);
    } catch (e) {
        console.error("GET Skills API Error:", e);
        return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        // যদি ডাটা array হয় (সব স্কিল ক্যাটেগরি একসাথে আপডেট করতে চাইলে)
        if (Array.isArray(body)) {
            await db.collection("skills").deleteMany({}); // আগের ডাটা ক্লিয়ার
            const result = await db.collection("skills").insertMany(body); // নতুন ডাটা ইনসার্ট
            return NextResponse.json({ success: true, result });
        }

        // যদি সিঙ্গেল অবজেক্ট পাঠায়
        const result = await db.collection("skills").insertOne(body);

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("POST Skills API Error:", e);
        return NextResponse.json({ error: "Failed to update skills", details: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        if (!body.title) {
            return NextResponse.json({ error: "Title is required to update a skill category" }, { status: 400 });
        }

        // title এর উপর ভিত্তি করে skills অ্যারে আপডেট করবে
        const result = await db.collection("skills").updateOne(
            { title: body.title },
            { $set: { skills: body.skills } }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("PUT Skills API Error:", e);
        return NextResponse.json({ error: "Failed to update skills", details: e.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title');

        if (title) {
            // যদি টাইটেল দেওয়া থাকে (যেমন: /api/skills?title=Frontend), তাহলে শুধু ওই স্কিল ক্যাটাগরি ডিলিট করবে
            const result = await db.collection("skills").deleteOne({ title });
            return NextResponse.json({ success: true, result });
        } else {
            // যদি টাইটেল না থাকে, তাহলে সব ডেটা ক্লিয়ার করে ফেলবে
            const result = await db.collection("skills").deleteMany({});
            return NextResponse.json({ success: true, result });
        }
    } catch (e) {
        console.error("DELETE Skills API Error:", e);
        return NextResponse.json({ error: "Failed to delete skills", details: e.message }, { status: 500 });
    }
}
