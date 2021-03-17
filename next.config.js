/* eslint @typescript-eslint/no-var-requires: 0 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer({
    ...defaultConfig,
    reactStrictMode: true,
    target: 'server',
  })
}
