const { users, tasks } = require("../dummyData");
const { add, update, dele, single } = require("../schema/task");

async function Task(fastify, options) {
  fastify.get("/task/all", async (req, res) => {
    res.code(200).send({
      error: false,
      message: "Data fetched successfully",
      status_code: 200,
      data: tasks,
    });
  });

  fastify.get("/task/user/:userId", single, async (req, res) => {
    var response = [];
    for (let task of tasks) {
      if (task.assigneeId === parseInt(req.params.userId)) response.push(task);
    }
    res.code(200).send({
      error: false,
      message: "Data fetched successfully",
      status_code: 200,
      data: response,
    });
  });

  fastify.post("/task/add", add, async (req, res) => {
    req.body["id"] = tasks.length + 1;
    tasks.push(req.body);
    res.code(200).send({
      error: false,
      message: "Data added successfully",
      status_code: 200,
      data: tasks,
    });
  });

  fastify.post("/task/update", update, async (req, res) => {
    const { id, status } = req.body;
    var response;
    for (let task of tasks) {
      if (task.id === id) {
        task.status = status;
        resposne = task;
        break;
      }
    }
    res.code(200).send({
      error: false,
      message: "Data updated successfully",
      status_code: 200,
      data: response,
    });
  });

  fastify.post("/task/delete", dele, async (req, res) => {
    const id = req.body.id;
    for (let index in tasks) {
      if (tasks[index].id === id) {
        tasks.splice(index, 1);
        break;
      }
    }
    res.code(200).send({
      error: false,
      message: "Data updated successfully",
      status_code: 200,
    });
  });
}

module.exports = Task;
