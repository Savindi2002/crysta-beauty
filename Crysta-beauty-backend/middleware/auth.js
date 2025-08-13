export  default function authMiddleware(req, res, next) {
    const header = req.header("Authorization");

    if (!header) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = header.replace("Bearer ", "");
    jwt.verify(token, "random465", (err, decoded) => {
        if (err) {
            console.log("Invalid token");
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = decoded; // Store decoded user info in request
        next();
    });
}