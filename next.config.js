/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["images.unsplash.com"]
//   },
//   experimental: {
//     newNextLinkBehavior: true,
//     scrollRestoration: true,
//     images: {
//       allowFutureImage: true,
//     },
//   },
// }

// module.exports = nextConfig

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);


module.exports = withTM({
  // your custom config goes here
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
});