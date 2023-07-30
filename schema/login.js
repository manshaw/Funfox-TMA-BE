const schema = {
  schema: {
    tags: ["LOGIN"],
    body: {
      type: "object",
      required: ["userId", "password"],
      properties: {
        userId: { type: "number" },
        password: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          error: { type: "boolean", default: false },
          message: { type: "string", default: "Data inserted successfully" },
          status_code: { type: "integer", default: 200 },
          data: {
            type: "object",
            properties: {
              userId: { type: "number" },
              name: { type: "string" },
              password: { type: "string" },
              pictureUrl: { type: "string" },
              group: { type: "string" },
            },
          },
        },
      },
    },
  },
};

module.exports = schema;
