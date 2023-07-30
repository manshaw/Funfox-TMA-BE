const fastify = require("fastify")({
    logger: true,
  });
  const cors = require("@fastify/cors");
  fastify.register(cors, {});
    
  fastify.register(require("@fastify/swagger"), {
    exposeRoute: true,
    routePrefix: "/",
    swagger: {
      info: {
        title: "Funfox",
        description: "Task Management System",
        version: "1.0.0",
      },
    },
  });
  
//   fastify.register(require("./route/department"));
//   fastify.register(require("./route/auth"));
  fastify.register(require("./route/login"));
  fastify.register(require("./route/task"));
  fastify.register(require("./route/user"));
//   fastify.register(require("./route/user"));
//   fastify.register(require("./route/content"));
  
  fastify.listen(
    { port: process.env.PORT || 3000, host: process.env.HOST || "0.0.0.0" },
    (err) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    }
  );
  