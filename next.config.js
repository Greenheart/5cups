const basePath = process.env.NODE_ENV === 'production' ? '/5cups' : ''

module.exports = {
    reactStrictMode: true,
    basePath,
    assetPrefix: basePath + '/',
}
