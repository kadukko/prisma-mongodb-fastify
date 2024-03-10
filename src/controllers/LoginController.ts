import type { FastifyRequest, FastifyReply } from "fastify"
import UserRepository from "../repositories/UserRepository"
import hashPassword from "../helpers/hashPassword"
import generateAuthToken from "../helpers/generateAuthToken"

export type LoginControllerRequestBody = {
  email: string
  password: string
}

export default {
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    const requestBody = request.body as LoginControllerRequestBody

    const user = await UserRepository.getByEmail(requestBody.email.toLowerCase())

    if (!user || user.password !== hashPassword(user.email, requestBody.password)) {
      return reply.status(400).send("E-mail ou senha inválida.")
    }

    const token = generateAuthToken(user)

    reply.setCookie('authToken', token, {
      path: '/',
      httpOnly: true,
      secure: "auto",
      sameSite: "none"
    })

    reply.send({ token })
  }
}