import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables
config({ path: "./config.env" });

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "*", // Replace "*" with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }
    try{
        await sendEmail({
            email:"jishnur652@gmail.com",
            subject:"dym website contact",
            message,
            userEmail: email,

        });

         // Add logic to send an email here (e.g., Nodemailer)
    res.status(200).json({
        success: true,
        message: "Email sent successfully",
    });




    }catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error"
        })

    }

    
    
 
   
});

// Use Router
app.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
