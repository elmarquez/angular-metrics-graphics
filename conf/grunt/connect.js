module.exports = {
  options: {
    port: 9000,
    hostname: 'localhost'
  },
  dist: {
    options: {
      open: {
        target: 'http://localhost:9000/dist/examples'
      }
    }
  }
};
