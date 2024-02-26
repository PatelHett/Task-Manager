import { NextResponse } from "next/server";
import connectDB from "@/app/helper/db";
import User from "@/models/user";

connectDB();

export async function GET(request) {
  let users = [];
  try {
    // Fetch all users from the database
    const users = await User.find().select("-password");

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users", success: false },
      { status: 500 }
    );
  }
}
