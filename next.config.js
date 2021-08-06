/* eslint-disable @typescript-eslint/no-var-requires */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = (phase, { defaultConfig }) => {
  const config = withBundleAnalyzer({
    ...defaultConfig,
    images: {
      domains: ['storage.googleapis.com', 'drive.google.com'],
    },
  })

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
      /* development only config options here */
    }
  }

  /* config options for all phases except development here */
  return {
    ...config,
    productionBrowserSourceMaps: true,
  }
}
