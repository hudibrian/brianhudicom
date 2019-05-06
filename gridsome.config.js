// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Brian Hudi',
  siteUrl: 'https://www.brianhudi.com',
  siteDescription: "Let's change the world together.",
  icon: 'src/assets/images/author.jpg',
  favicon: 'src/assets/images/author.jpg',
  touchicon: 'src/assets/images/author.jpg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: 'blog/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'blog/tag/:id',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/landing.data.json',
        typeName: 'LandingData',
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
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
