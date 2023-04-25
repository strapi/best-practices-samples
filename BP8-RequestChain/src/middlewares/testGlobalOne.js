module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const url = ctx.request.url.split("/");
    if (url[2] && url[2] === "blog-posts" && ctx.request.method === "GET") {
      console.log("Before Global Middleware One");
    }

    await next();

    if (url[2] && url[2] === "blog-posts" && ctx.request.method === "GET") {
      console.log("After Global Middleware One");
    }
  };
};
