module.exports = {
  siteTitle: "Then go talk to a wall", // Site title.
  siteTitleShort: "talk2wall", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Then go talk to a wall", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Then go talk to a wall", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY.MM.DD", // Date format for display.
  userName: "yo1000", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Yokohama, JP", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/285/yo1000.com", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-material-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:yoichi.kikuchi.aug@gmail.com",
      iconClassName: "fa fa-paper-plane"
    }
  ],
  copyright: "Copyright © 2017. Material User" // Copyright string for the footer of the website and RSS feed.
};
