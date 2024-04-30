import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    /* from the frontend we are grabbing the authorization header(that is where the token will be set) and we can Crabbe it at the backend */
    if (!token) return res.json(403).send("Access Denied");
    if (token.startWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
