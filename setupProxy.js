const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/send", {target: `http://localhost:5000`}))
}