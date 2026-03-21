import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        // "achievements" কালেকশন থেকে ডাটা রিড করবে
        const achievements = await db.collection("achievements").find({}).toArray();

        return NextResponse.json(achievements.length > 0 ? achievements : []);
    } catch (e) {
        console.error("GET Achievements API Error:", e);
        return NextResponse.json({ error: "Failed to fetch achievements" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        // যদি ডাটা array হয় (একাধিক achievement একসাথে ইনসার্ট করতে চাইলে)
        if (Array.isArray(body)) {
            await db.collection("achievements").deleteMany({}); // আগের ডাটা ক্লিয়ার
            const result = await db.collection("achievements").insertMany(body); // নতুন ডাটা ইনসার্ট
            return NextResponse.json({ success: true, result });
        }

        // যদি সিঙ্গেল অবজেক্ট পাঠায়
        const result = await db.collection("achievements").insertOne(body);

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("POST Achievements API Error:", e);
        return NextResponse.json({ error: "Failed to update achievements", details: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        if (!body.title) {
            return NextResponse.json({ error: "Title is required to update an achievement" }, { status: 400 });
        }

        // title এর উপর ভিত্তি করে আপডেট করবে
        const result = await db.collection("achievements").updateOne(
            { title: body.title },
            {
                $set: {
                    type: body.type,
                    date: body.date,
                    rank: body.rank,
                    result: body.result
                }
            }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("PUT Achievements API Error:", e);
        return NextResponse.json({ error: "Failed to update achievements", details: e.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title');

        if (title) {
            // যদি title দেওয়া থাকে (যেমন: /api/achievements?title=Codeforces...), তাহলে শুধু ওই achievement ডিলিট করবে
            const result = await db.collection("achievements").deleteOne({ title });
            return NextResponse.json({ success: true, result });
        } else {
            // যদি title না থাকে, তাহলে সব ডেটা ক্লিয়ার করে ফেলবে
            const result = await db.collection("achievements").deleteMany({});
            return NextResponse.json({ success: true, result });
        }
    } catch (e) {
        console.error("DELETE Achievements API Error:", e);
        return NextResponse.json({ error: "Failed to delete achievements", details: e.message }, { status: 500 });
    }
}