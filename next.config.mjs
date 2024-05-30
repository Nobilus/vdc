import { fileURLToPath } from 'node:url'
import createJiti from 'jiti'
const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./src/env')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd,
  },
}

export default nextConfig
