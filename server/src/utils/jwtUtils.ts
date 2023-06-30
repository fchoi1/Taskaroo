import jwt from 'jsonwebtoken';

const secretKey = 'YOUR_SECRET_KEY';

export const generateToken = (payload: object) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};
