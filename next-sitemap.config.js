/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://yii-ecommerce.vercel.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  sitemapSize: 7000,
  changefreq: "daily",
};
