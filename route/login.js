const schema = require("../schema/login");
const {users, tasks} = require("../dummyData");

async function Login(fastify, options) {
  fastify.post("/signin", schema, async (req, res) => {
    const { userId, password } = req.body;
    var response = {
      error: true,
      message: "Signin Failed",
      status_code: 400,
      data: {},
    };
    for (let user of users) {
      if (user.userId === userId && user.password === password) {
        response = {
          error: false,
          message: "Signin Success",
          status_code: 200,
          data: user,
        };
        console.log("FOUND");
        break;
      }
    }
    res.code(response.status_code).send(response);
  });
}

module.exports = Login;
