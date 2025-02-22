const User = require("./models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";


exports.SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username) {
            return res.status(400).json({ error: "username field is required" })
        }

        // Check if user exists
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ msg: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        user = new User({ username, email, password: hashedPassword });
        await user.save();

        // Create JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, username, email } });

    } catch (err) {
        res.status(500).json({ msg: `${err}` });
    }
}

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        // Generate JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, username: user.username, email } });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}


exports.getProfile = async (req, res) => {
    try {
        
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}