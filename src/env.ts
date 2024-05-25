import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    MAPS_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_FB_PAGE_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_FB_PAGE_ID: process.env.NEXT_PUBLIC_FB_PAGE_ID,
    MAPS_API_KEY: process.env.MAPS_API_KEY,
  },
})
