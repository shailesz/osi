import type { GatsbyConfig } from "gatsby"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

// import env
dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.osi.shailesz.live`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mantine`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`
  ],
}

export default config
