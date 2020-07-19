module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    siteUrl: "https://sampittko.sk",
    author: {
      fullName: "Samuel Pitoňák",
      email: "sampittko@gmail.com",
      userName: "sampittko", // change this
      socials: {
        twitter: {
          name: "Twitter",
          url: "https://twitter.com/sampittko",
        },
        linkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/sampittko",
        },
        gitHub: {
          name: "GitHub",
          url: "https://github.com/sampittko",
        },
      },
    },
    developer: {
      gitHubUrl: "https://github.com/sampittko/sampittko.sk",
      userName: "sampittko",
      fullName: "Samuel Pitoňák",
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/img/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://sampittko.sk",
        sitemap: "https://sampittko.sk/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Pitoňák (@sampittko)`,
        short_name: `Samuel Pitoňák`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sk/blog`,
        path: `${__dirname}/src/content/sk/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `en/blog`,
        path: `${__dirname}/src/content/en/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`, // location of translations
        languages: ["sk", "en"], // languages to generate routes for
        defaultLanguage: "sk", // located at root
        redirect: false, // redirect to /{defaultLanguage} when requesting root
        // additional settings for various needs
        external: {
          rootLanguage: "sk", // located at root (eq {defaultLanguage} above but {rootLanguage} is more exact)
          defaultLanguage: "en", // language to redirect to by default
          languageStrings: ["Slovenčina", "English"], // full language names in the same order as {languages} above
          storageKeys: {
            // for {LanguagePicker} and {withIntlRedirect}
            session: {
              languageSet: "lang_set", // waiting for initialization of this every new session so that Layout can be animation-renderred with corresponding content and appropriate language
            },
            local: {
              languagePreference: "lang_pref", // if set, always redirecting to this language in a new session
            },
          },
        },
      },
    },
    // TODO Configure
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {},
    // },
  ],
};
