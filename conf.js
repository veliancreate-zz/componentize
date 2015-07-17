exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub ",
  baseUrl: 'http://localhost:3000',
  specs: ['spec/*/*Spec.js'],
  capabilities: {
    'browserName': 'firefox'
  }
};