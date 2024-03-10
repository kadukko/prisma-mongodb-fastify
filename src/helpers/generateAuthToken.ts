import { IUser } from "../classes/User";
import getEnv from "./getEnv";
import * as jwt from 'jsonwebtoken';

export default (user: IUser) => {
  const SECRET_KEY = getEnv('SECRET_KEY')
  const payload = { id: user.id, email: user.email }
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' })
}