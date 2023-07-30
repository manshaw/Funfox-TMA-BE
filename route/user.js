const { users, tasks } = require("../dummyData");

async function User(fastify, options) {
  fastify.get("/user/all", async (req, res) => {
    res.code(200).send({
      error: false,
      message: "Data fetched successfully",
      status_code: 200,
      data: users,
    });
  });
}

module.exports = User;
