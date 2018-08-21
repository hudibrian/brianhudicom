module.exports = {
  siteTitle: "Brian Hudi's Blog", // Site title.
  siteTitleShort: "Hudi's Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Brian Hudi's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://brianhudi.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A blog and personal website where Brian Hudi will display his teachings and portfolio.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "292290951352393", // FB Application ID for using app insights
  googleAnalyticsID: "UA-124376316-1", // GA tracking ID.
  disqusShortname: "brianhudicom", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Brian Hudi", // Username to display in the author segment.
  userTwitter: "brianhudi", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Chicago", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "I am a software developer with a particular interest in web development and javascript.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/hudibrian",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/brianhudi",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:bshudi@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Brian Hudi", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
