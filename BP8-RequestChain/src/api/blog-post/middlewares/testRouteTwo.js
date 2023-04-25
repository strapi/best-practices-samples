module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("Before Route Middleware Two");

    await next();

    console.log("===================");
    console.log("After Route Middleware Two");
  };
};
