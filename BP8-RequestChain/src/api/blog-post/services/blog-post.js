"use strict";

/**
 * blog-post service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async find(params) {
      console.log("===================");
      console.log("Before Service - find");

      const { results, pagination } = await super.find(params);

      console.log("===================");
      console.log("After Service - find");

      return { results, pagination };
    },
  })
);
