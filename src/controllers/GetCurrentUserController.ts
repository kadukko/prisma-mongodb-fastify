import type { FastifyRequest, FastifyReply } from "fastify"
import UserRepository from "../repositories/UserRepository"
import parseAuthToken from "../helpers/parseAuthToken"


export default {
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    const auth = await parseAuthToken(request.cookies.authToken)

    if (!auth) {
      return reply.status(401).send("Você não está autenticado.")
    }

    const user = await UserRepository.getById(auth.id)

    if (!user || !user.active) {
      return reply.status(404).send("Usuário inválido.")
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name
    }
  }
}