require("dotenv").config();
import { connectDatabase } from "../src/database";

const clear = async () => {
  try {
    console.log("[clear] : running!");
    const db = await connectDatabase();

    const bookings = await db.bookings.find({}).toArray();
    const listings = await db.listings.find({}).toArray();
    const users = await db.users.find({}).toArray();

    if (bookings.length > 0) {
      await db.bookings.drop();
    }

    if (listings.length > 0) {
      await db.listings.drop();
    }

    if (users.length > 0) {
      await db.users.drop();
    }

    console.log("[clear] : completed!");
    process.exit();
  } catch (err) {
    console.error(err);
    throw new Error("failed to clear the database");
  }
};

clear();