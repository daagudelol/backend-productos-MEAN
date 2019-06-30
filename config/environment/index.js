/**
 * Default specific configuration
 * @author Diego Alejandro Agudelo Lugo <daagudelol@gmail.com>
 */

const all = {
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.PORT || 8088,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'w0rksh0p-full5tack-j4v45cr1pt',
  },

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://admin:<Cambiarcontrasena>@cluster0-shard-00-00-uapui.mongodb.net:27017,cluster0-shard-00-01-uapui.mongodb.net:27017,cluster0-shard-00-02-uapui.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    db: 'workshop-fullstack-js',
  },
};

module.exports = all;
