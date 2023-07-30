const add = {
  schema: {
    tags: ["TASK"],
    body: {
      type: "object",
      required: [
        "assigneeId",
        "assignee",
        "title",
        "description",
        "status",
        "dated",
      ],
      properties: {
        assigneeId: { type: "number" },
        assignee: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        status: { type: "string" },
        dated: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          error: { type: "boolean", default: false },
          message: { type: "string", default: "Data added successfully" },
          status_code: { type: "integer", default: 200 },
          data: { type: "array" },
        },
      },
    },
  },
};

const update = {
  schema: {
    tags: ["TASK"],
    body: {
      type: "object",
      required: ["id", "status"],
      properties: {
        id: { type: "number" },
        status: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          error: { type: "boolean", default: false },
          message: { type: "string", default: "Data added successfully" },
          status_code: { type: "integer", default: 200 },
          data: { type: "array" },
        },
      },
    },
  },
};

const dele = {
  schema: {
    tags: ["TASK"],
    body: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "number" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          error: { type: "boolean", default: false },
          message: { type: "string", default: "Data deleted successfully" },
          status_code: { type: "integer", default: 200 },
        },
      },
    },
  },
};

const single = {
  schema: {
    tags: ["TASK"],
    params: {
      type: "object",
      additionalProperties: false,
      required: ["userId"],
      properties: { userId: { type: "number" } },
    },
    response: {
      200: {
        type: "object",
        properties: {
          error: { type: "boolean", default: false },
          message: { type: "string", default: "Data fetched successfully" },
          status_code: { type: "integer", default: 200 },
          data: { type: "array" },
        },
      },
    },
  },
};

module.exports = { add, update, dele, single };
