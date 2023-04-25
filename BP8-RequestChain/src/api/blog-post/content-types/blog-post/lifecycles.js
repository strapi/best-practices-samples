module.exports = {
  beforeFindMany(event) {
    console.log("===================");
    console.log("Before Lifecycle - findMany");

    // This isn't a legit log but adding for clarity
    console.log("===================");
    console.log("Actual Database Query executed");
  },

  afterFindMany(event) {
    console.log("===================");
    console.log("After Lifecycle - findMany");
  },
};
