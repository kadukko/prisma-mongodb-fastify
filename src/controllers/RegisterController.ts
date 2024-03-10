import type { FastifyRequest, FastifyReply } from "fastify"
import UserRepository from "../repositories/UserRepository"
import User from "../classes/User"
import hashPassword from "../helpers/hashPassword"

export type RegisterControllerRequestBody = {
  email: string
  password: string
  name: string
}

export default {
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    const requestBody = request.body as RegisterControllerRequestBody

    if (await UserRepository.getByEmail(requestBody.email.toLowerCase())) {
      return reply.status(400).send("Esse e-mail já está em uso.")
    }

    const user = new User({
      email: requestBody.email,
      password: hashPassword(requestBody.email, requestBody.password),
      name: requestBody.name
    })

    await UserRepository.save(user)

    return {
      id: user.id,
      email: user.email,
      name: user.name
    }
  }
}