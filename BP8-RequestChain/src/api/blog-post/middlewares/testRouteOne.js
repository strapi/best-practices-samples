module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("===================");
    console.log("Before Route Middleware One");

    await next();

    console.log("After Route Middleware One");
  };
};
