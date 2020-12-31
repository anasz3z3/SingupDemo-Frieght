//const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*/*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      //url: 'https://ship.freightos.com/',
      driver: 'hosted',
      browser: 'chrome',
      //rootElement: 'body',
      angular: false
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js',
    signupPage: './pages/signupPage.js',
    commonPage: './pages/common.js',
    quoteSearchPage: './pages/quoteSearchPage.js',
    commonData: './test_files/commonData.js',

    //signupPage: './pages/signup.js',
  },
  bootstrap: null,
  mocha: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './output',
      reportFilename: 'Report',
      clearOldScreenshots: true,
      saveJson: false
    }
  },
  name: 'Demo-Frieght00',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
