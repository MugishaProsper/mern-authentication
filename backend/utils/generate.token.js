import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ id : userId }, process.env.jwt_secret, { expiresIn : '15d' });

  res.cookie('jwt', token, { httpOnly : true, sameSite : "strict", secure : process.env.node_env })
}