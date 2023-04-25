module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    if (ctx.request.url === "/api/blog-posts") {
      console.log("Before Global Middleware Two");

      await next();

      console.log("===================");
      console.log("After Global Middleware Two");
    } else {
      return next();
    }
  };
};
