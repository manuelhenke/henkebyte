import { createClient } from 'contentful'

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}

let contentfulClient

try {
  contentfulClient = createClient(config)
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error)
}

export const client = contentfulClient