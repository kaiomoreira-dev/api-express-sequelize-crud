import { z } from "zod";
import 'dotenv/config'

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(3333),
    HOST: z.string().default('0.0.0.0'),
})

const _env = envSchema.safeParse(process.env)

if(_env.success !== true){
    console.error('Error converting environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data