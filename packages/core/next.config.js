// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['offer-page']);

module.exports = withTM({
  // typescript: {
  //   ignoreDevErrors: true,
  //   ignoreBuildErrors: true,
  // },

  distDir: '.next',
  //useFileSystemPublicRoutes: true,
  target: 'server', // ['server', 'serverless', 'experimental-serverless-trace']
  poweredByHeader: false,
  devIndicators: {
    buildActivity: true,
    autoPrerender: true,
  },
  reactStrictMode: true,
  // experimental: {
  // cpus: Math.max(
  //   1,
  //   (Number(process.env.CIRCLE_NODE_TOTAL) ||
  //     (os.cpus() || { length: 1 }).length) - 1
  // ),
  // modern: false,
  // plugins: false,
  // profiling: false,
  // sprFlushToDisk: true,
  // reactMode: 'concurrent', // ['legacy', 'blocking', 'concurrent']
  // workerThreads: false,
  // basePath: '',
  // pageEnv: false,
  // productionBrowserSourceMaps: false,
  // optionalCatchAll: false,
  // },
});
