# Gatsby i18lized Blog Starter

Kick off your project with this internationalized personal blog website boilerplate.

## Features

- Supports as many languages as needed
- Extensible so that it fits anyones needs
- Dark mode
- Categorizable blog posts
- Git-hosted content
- Easy navigation
- Simple & clean look achieved with [Tailwind CSS](https://tailwindcss.com/)
- Accessible & fast for great SEO and high usability
- Easy to personalize
- Let visitors know that you are open to work
- Cookie consent for GDPR compliance

## Live Demo

Visit [www.gatsby-starter-intl-blog.now.sh](https://gatsby-starter-intl-blog.now.sh/) to see the starter live in action.

## Deploy with one click

Deployment is made simple and fast thanks to providers like [Vercel](https://vercel.com) or [Netlify](https://netfliy.com). Click on one of the buttons below to deploy in seconds.

<a href="https://vercel.com/import/git?s=https://github.com/sampittko/gatsby-starter-intl-blog"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a> <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sampittko/gatsby-starter-intl-blog"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy with Netlify"></a>

## Project Structure

```
    .
    ├── content                     # Markdown files used by Gatsby to generate pages
    │   ├── en                      # Content translated to English langauge
    │   └── [language-key]          # Content translated to [language-key] language
    ├── src
    │   ├── assets                  # Static assets (e.g. CSS and images)
    │   ├── components              # All React and Gatsby-friendly components
    │   ├── hooks                   # React hooks for better reusability
    │   ├── locales                 # Translations for UI components for every supported language
    │   ├── pages                   # Pages that are generated by Gatsby
    │   ├── templates               # Templates used by Gatsby to generate pages
    │   └── utils                   # Utility functions that are needed across the application
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    └── tailwind.config.js

```

## Internationalization

This starter supports addition of new languages right out of the box.

### Rules

Firstly, you will need to follow certain rules for internationalization to work correctly. Breaking any of the following rules may cause internationalization not to work properly if at all.

1. Keep folders names of individual articles consistent across supported languages (e.g. <u>/content/en/blog/life-hacks/this-is-my-first-blog-post/</u>, <u>/content/sk/blog/life-hacks/this-is-my-first-blog-post/</u> and <u>/content/si/blog/life-hacks/this-is-my-first-blog-post/</u>)
2. Prefix blog post folder name with it's category name (e.g. <u>life-hacks</u> from the example above)
3. Use **at least** `post_title`, `post_category` and `post_date` in frontmatter of article's MD file
4. Make `post_category` field inside frontmatter consistent across all blog posts in the category's folder
5. Keep formats of `post_date` field inside frontmatter consistent across all blog posts

```markdown
---
page_description: This is a super blog 2 # Use for better SEO
post_title: Ahojqiq
post_description: How to get consistent thoughts # Use for custom excerpt
post_category: Zamyslenia
post_date: "2020-04-05"
---
```

Suggestion: keep folders names of articles (blog posts titles in other words) and their categories in the default language (e.g. default language of the website in the example mentioned above would be English)

Note: it is not necessary to make a post translation immediately after writing a blog post in any of the supported languages

### Adding Support For a New Language

Replace `[language-key]` with the actual language key that represents the language that is to be added.

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/gatsby-config.js) file

   1. Extend configuration of <u>gatsby-plugin-intl</u>

      - Add a new `[language-key]` to `options.languages` array
      - Add a new `[language-key]` to `options.external.languageStrings` array

   2. Extend configuration of <u>gatsby-source-filesystem</u> by adding the following entry

      ```javascript
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `[language-key]/blog`,
        path: `${__dirname}/content/[language-key]/blog`,
      },
      ```

2. Open [locales](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/locales/) folder and create a new `[language-key].json` file with corresponding translations

3. Open [content](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/content/) folder and create a new `/[language-key]/blog/` folder (ideally with translated existing articles included)

4. Extend existing GraphQL queries in the [hooks](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/hooks/) folder by adding the newly added language

5. Extend existing GraphQL page queries in [blog.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/templates/blog/blog.js) and [category.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/templates/blog/category.js) by adding the newly added language

6. **You are done**

### Change Default Language

**Default language** is selected at the very first load of the website if the browser language of a visitor does not match any of the supported languages or it cannot be read correctly. Execute the following steps in order to change it:

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/gatsby-config.js) file and navigate to the configuration of <u>gatsby-plugin-intl</u>
2. Change the value of `options.external.defaultLanguage` key with wanted language key
3. **You are done**

## Personalize

Make it fully yours by replacing defaults with your personal information. Firstly, open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/gatsby-config.js) and change `title`, `siteUrl` and properties of `author` object inside `siteMetadata`object.

### Change favicon with profile picture inside header

Replace default [favicon.png](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/assets/img/favicon.png) file.

- resolution: square
- format: PNG

### Change header image

Replace default [header_image.jpg](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/src/assets/img/header_image.jpg) file.

- resolution: 1024x96
- format: JPEG

### Toggle open to work status

Set `openToWork` to either `true` or `false` inside [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/gatsby-config.js).

## Contributing

Check [CONTRIBUTING.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/CONTRIBUTING.md) in order to see how to contribute to this open-source project.

## Changelog

Check what is new but also the history of changes for this project in [CHANGELOG.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/CHANGELOG.md).

## License

This project is under the MIT license which is great! Read more inside [LICENSE.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/main/LICENSE).
