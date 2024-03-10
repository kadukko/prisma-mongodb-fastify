import getEnv from "./helpers/getEnv"
import server from "./server"

try {
  const port = Number(getEnv('PORT', '4000'));
  server.listen({ port })
} catch (err) {
  console.error(err)
  process.exit(1)
}