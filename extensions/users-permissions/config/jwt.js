module.exports = {
  jwtSecret: process.env.JWT_SECRET || "41dc1750-f157-4d3a-b55c-522c8a66b4f9",
  jwt: {
    expiresIn: "1d",
  },
};
