// import the json server
const JSONServer = require('json-server');

// create server for running json file
const rBuilder = JSONServer.create();

// create middleware
const middleware = JSONServer.defaults();

// import db.json file
const router = JSONServer.router('db.json');

// define port to run the server
const PORT = 3000 || process.env.PORT

// use middleware
rBuilder.use(middleware);

// use router
rBuilder.use(router);

// start the server
rBuilder.listen(PORT, () => {
  console.log(`JSON Server running at PORT number ${PORT}`);
});
