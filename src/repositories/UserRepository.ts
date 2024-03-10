import User, { IUser } from "../classes/User"
import prisma from "../database/prisma"
import hashPassword from "../helpers/hashPassword"

const UserRepository = {
  async getById(id: string) {
    const doc = await prisma.user.findUnique({ where: { id } })
    
    return doc && new User(doc as IUser)
  },

  async getByEmail(email: string) {
    const doc = await prisma.user.findUnique({ where: { email } })

    return doc && new User(doc as IUser)
  },

  async save(user: User) {
    if (!await UserRepository.getById(user.id)) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email,
          password: user.password,
          name: user.name,
          verified: user.verified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          disabledAt: user.disabledAt,
          active: user.active,
        }
      })
    } else {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          email: user.email,
          password: user.password,
          name: user.name,
          verified: user.verified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          disabledAt: user.disabledAt,
          active: user.active,
        }
      })
    }
  }
}

export default UserRepository