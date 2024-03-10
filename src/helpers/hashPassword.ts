import * as crypto from 'node:crypto'
import getEnv from './getEnv';

const secret = getEnv('SECRET_KEY', 'secret-key')

export default (email: string, password: string) => {
  return crypto
    .createHmac("sha256", `${email.toLowerCase()}.${secret}`)
    .update(password)
    .digest("hex");
}