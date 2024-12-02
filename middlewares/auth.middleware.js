import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];  // "Bearer <token>"

    if (!token) {
        return res.status(401).send({ message: 'Access Denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Invalid or expired token' });
        }

        req.user = decoded;
        next();
    });
};

