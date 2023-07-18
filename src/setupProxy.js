const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
const lyrics_api_key = process.env.Lyrics_React_API_KEY;
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.musixmatch.com/ws/1.1',
      changeOrigin: true,
      onProxyReq: (proxyReq) => {
        // Add your Musixmatch API key to the request headers (replace API_KEY with your actual API key)
        proxyReq.setHeader('x-api-key', lyrics_api_key);
      },
    })
  );
};
