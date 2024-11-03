import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"user doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token });
        }
        else {
            res.json({success:false, message:"invalid credentials"})
        }

    } catch (error) {
        res.json({success:false,message:error.message})
    }
};

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        // Generate token
        const token = createToken(user._id);

        res.status(201).json({ success: true, token, userId: user._id });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Admin login
const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({ success: true, token });

        }
        else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
};

export { loginUser, registerUser, adminLogin };