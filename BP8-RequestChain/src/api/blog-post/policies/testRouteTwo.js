module.exports = (policyContext, config, { strapi }) => {
  console.log("Route Policy Two");

  const canDoSomething = true;

  if (canDoSomething) {
    return true;
  }

  return false;
};
