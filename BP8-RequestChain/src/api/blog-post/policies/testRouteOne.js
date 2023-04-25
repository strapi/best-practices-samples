module.exports = (policyContext, config, { strapi }) => {
  console.log("===================");
  console.log("Route Policy One");

  const canDoSomething = true;

  if (canDoSomething) {
    return true;
  }

  return false;
};
