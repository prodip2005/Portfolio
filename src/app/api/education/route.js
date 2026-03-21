import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        // "education" কালেকশন থেকে ডাটা রিড করবে
        const education = await db.collection("education").find({}).toArray();

        return NextResponse.json(education.length > 0 ? education : []);
    } catch (e) {
        console.error("GET Education API Error:", e);
        return NextResponse.json({ error: "Failed to fetch education" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        // যদি ডাটা array হয় (একাধিক এডুকেশন একসাথে ইনসার্ট করতে চাইলে)
        if (Array.isArray(body)) {
            await db.collection("education").deleteMany({}); // আগের ডাটা ক্লিয়ার
            const result = await db.collection("education").insertMany(body); // নতুন ডাটা ইনসার্ট
            return NextResponse.json({ success: true, result });
        }

        // যদি সিঙ্গেল অবজেক্ট পাঠায়
        const result = await db.collection("education").insertOne(body);

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("POST Education API Error:", e);
        return NextResponse.json({ error: "Failed to update education", details: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        const body = await req.json();

        if (!body.degree) {
            return NextResponse.json({ error: "Degree is required to update an education entry" }, { status: 400 });
        }

        // degree এর উপর ভিত্তি করে আপডেট করবে
        const result = await db.collection("education").updateOne(
            { degree: body.degree },
            {
                $set: {
                    status: body.status,
                    institution: body.institution,
                    period: body.period,
                    major: body.major
                }
            }
        );

        return NextResponse.json({ success: true, result });
    } catch (e) {
        console.error("PUT Education API Error:", e);
        return NextResponse.json({ error: "Failed to update education", details: e.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");

        const { searchParams } = new URL(req.url);
        const degree = searchParams.get('degree');

        if (degree) {
            // যদি degree দেওয়া থাকে (যেমন: /api/education?degree=HSC), তাহলে শুধু ওই এডুকেশন ডিলিট করবে
            const result = await db.collection("education").deleteOne({ degree });
            return NextResponse.json({ success: true, result });
        } else {
            // যদি degree না থাকে, তাহলে সব ডেটা ক্লিয়ার করে ফেলবে
            const result = await db.collection("education").deleteMany({});
            return NextResponse.json({ success: true, result });
        }
    } catch (e) {
        console.error("DELETE Education API Error:", e);
        return NextResponse.json({ error: "Failed to delete education", details: e.message }, { status: 500 });
    }
}