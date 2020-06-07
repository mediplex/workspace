module.exports = {
  distDir: '.next',
  //useFileSystemPublicRoutes: true,
  target: 'serverless', // ['server', 'serverless', 'experimental-serverless-trace']
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
}
