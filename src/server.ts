import Fastify from "fastify";
import RegisterController from "./controllers/RegisterController";
import LoginController from "./controllers/LoginController";
import getEnv from "./helpers/getEnv";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from '@fastify/cors';
import GetCurrentUserController from "./controllers/GetCurrentUserController";
import LogoutController from "./controllers/LogoutController";

const server = Fastify({
  logger: true
})

server.register(fastifyCors, {})

server.register(fastifyCookie, {
  secret: getEnv('SECRET_KEY'),
  hook: 'onRequest',
  parseOptions: {}
})

server.post('/register', RegisterController.handler)
server.post('/login', LoginController.handler)
server.post('/logout', LogoutController.handler)
server.get('/user', GetCurrentUserController.handler)

export default server