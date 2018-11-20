module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  blogAuthorDir: 'sample-authors', // The name of directory that contains your 'authors' folder.
  blogAuthorId: 'hudi', // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: 'Hello, I am Brian Hudi', // Site title.
  siteTitleAlt: 'B.Hudi Blog', // Alternative site title for SEO.
  siteLogo:
    'https://res.cloudinary.com/bshrp/image/upload/v1542003248/method-draw-image_19.svg', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteLogoLight:
    'https://res.cloudinary.com/bshrp/image/upload/v1542003105/method-draw-image_17.svg', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: 'https://brianhudi.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Let's build a better web together.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    'https://res.cloudinary.com/bshrp/image/upload/q_auto/v1542003026/steve-harvey-523112-unsplash.webp', // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Brian Hudi', // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-124376316-1', // GA tracking ID.
  disqusShortname: 'brianhudicom', // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    'https://github.com/hudibrian',
    'https://twitter.com/brianhudi',
    'https://www.linkedin.com/in/brian-hudi-73256632/',
    'mailto:bshudi@gmail.com'
  ],
  postDefaultCategoryID: 'Development', // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/hudibrian',
      iconClassName: 'fa fa-github' // Disabled, see Navigation.jsx
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/brianhudi',
      iconClassName: 'fa fa-twitter' // Disabled, see Navigation.jsx
    },
    {
      label: 'Email',
      url: 'mailto:bshudi@gmail.com',
      iconClassName: 'fa fa-envelope' // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: 'Brian Hudi' // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
