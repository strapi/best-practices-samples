"use strict";

/**
 * blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async find(ctx) {
      console.log("===================");
      console.log("Before Controller - find");

      const { data, meta } = await super.find(ctx);

      console.log("===================");
      console.log("After Controller - find");

      return { data, meta };
    },
  })
);
