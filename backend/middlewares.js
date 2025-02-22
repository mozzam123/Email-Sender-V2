const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken'); // Make sure to add this line if not already present

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ msg: "No token, authorization denied" });

    // Extract the token from "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        req.user = decoded; // This will contain { id: user._id }
        next();
    } catch (err) {
        res.status(400).json({ msg: "Invalid token" });
    }
}

// Export the middleware
module.exports = {
    verifyToken
};