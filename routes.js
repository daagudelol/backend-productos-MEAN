/**
 * Main application routes
 * @author: Diego Alejandro Agudelo Lugo <daagudelol@gmail.com>
 */

// Import Endpoints
const helloWorld = require('./api/helloWorld');
// New Line
const product = require('./api/product');

module.exports = (app) => {
  app.use('/api/helloworld', helloWorld);
  // New line
  app.use('/api/products', product);
};
