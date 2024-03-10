import 'dotenv/config'

export default (key: string, defaultValue?: string) => {
  return process.env[key] || defaultValue
}