const Hapi = require("@hapi/hapi");
const coffee = require("./lib/coffee");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
  });
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

console.log(coffee);
init();
