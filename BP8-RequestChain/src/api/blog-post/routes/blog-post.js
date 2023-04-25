"use strict";

/**
 * blog-post router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::blog-post.blog-post", {
  config: {
    find: {
      policies: [
        "api::blog-post.test-route-one",
        "api::blog-post.test-route-two",
      ],
      middlewares: [
        "api::blog-post.test-route-one",
        "api::blog-post.test-route-two",
      ],
    },
  },
});
