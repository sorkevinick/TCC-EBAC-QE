export const config = {
    runner: 'local',
    port: 4723,


    // user: 'kevin.fonseca',
    // key: '',
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',    

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'ebac-qe',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutoCompletion': true
        
        // platformName: 'Android',
        // 'appium:app': 'storage:filename=ebacshop.aab',
        // 'appium:deviceName': 'Android GoogleAPI Emulator',
        // 'appium:platformVersion': '12.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:disableIdLocatorAutoCompletion': true,
        // 'sauce:options': {
        //     build: 'appium-build-teste-ebacshop',
        //     name: 'Mobile Test EbacShop',
        //     deviceOrientation: 'PORTRAIT',

        // },
        
        

    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
       
        await driver.takeScreenshot();
       
    },
}
