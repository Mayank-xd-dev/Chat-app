import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [


  // Male Users
  
 
  {
    email: "mayank@owner.com",
    fullName: "Mayank-Owner",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
   {
    email: "admin@admin.com",
    fullName: "Admin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  }
 

];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
