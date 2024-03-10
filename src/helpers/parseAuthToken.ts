import * as jwt from 'jsonwebtoken'
import getEnv from './getEnv'

type IAuthTokenPayload = {
  id: string
  email: string
}

export default (token: string) => {
  const SECRET_KEY = getEnv('SECRET_KEY')

  try {
    return jwt.verify(token, SECRET_KEY) as IAuthTokenPayload
  } catch {
    return null
  }
}