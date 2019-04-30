// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Brian Hudi',
  siteUrl: 'https://www.brianhudi.com',
  siteDescription: 'Its nice to meet you friend',
  icon: 'src/assets/images/author.jpg',
  favicon: 'src/assets/images/author.jpg',
  touchicon: 'src/assets/images/author.jpg',
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: 'blog/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: 'blog/tag/:id',
            create: true,
          },
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
};
