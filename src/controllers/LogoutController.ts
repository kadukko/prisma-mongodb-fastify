import type { FastifyRequest, FastifyReply } from "fastify"

export default {
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.cookies.authToken) {
      return reply.status(401).send("Você não está autenticado.")
    }

    reply.clearCookie('authToken')
  }
}