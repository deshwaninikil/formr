const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://etstgusers.economictimes.indiatimes.com',
      changeOrigin: true,
    })
 );};