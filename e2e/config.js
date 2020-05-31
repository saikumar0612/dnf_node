
var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var fs = require('fs-extra');
var path = require('path');

var paths = ('dir ', path.join(__dirname, '../../Jasmine_demo/'));

//console.log(myFileName);
//var Excel = require('exceljs');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    //capabilities: {
    //    'browserName': 'chrome',
    //    'shardTestFiles': true,
    //    'maxInstances': 2
    //},

    //multiCapabilities: [

      
    // {
    //    'browserName': 'chrome',
    // },
    // {
    //    'browserName': 'firefox',
    //    'moz:firefoxOptions':
    //     {
    //        'args': ['--safe-mode']
    //     }

    //    },

    //    //{
    //    //    'browserName': 'safari',
    //    //},


    //    {
    //        'browserName': 'MicrosoftEdge'
    //    }
   
  
    //],

   // specs: ['F:/Jasmine/ConfigModule/Theme_settings/Themesettingsspec.js'],
     // path.join(__dirname, 'Ats/Candidate/candiatespec.js'),

    suites:
    {
        smoke: [

 
          path.join(__dirname, 'ngo/ngo_automation.js'),
      
          
        
            ]
    },

   
    framework: 'jasmine2',
    params:
    {
        url: "http://localhost:4200/",
        
       
    },


    onPrepare: function () {
        // Default window size
        browser.driver.manage().window().maximize();
        // Default implicit wait
        browser.manage().timeouts().implicitlyWait(60000);
        // Angular sync for non angular apps
        browser.ignoreSynchronization = true;

        fs.emptyDir('./reports/xml/', function (err) {
            // console.log(err);
        });

        fs.emptyDir('./reports/screenshots/', function (err) {
            //console.log(err);
        });

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/xml/',
            filePrefix: 'xmlresults'
        }));




        jasmine.getEnv().addReporter({
            specDone: function (result) {
                //if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');

                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('./reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                      
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
                //}
            }
        });
    },

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            testConfig = {
                reportTitle: 'DNF Test  Execution Report',
                // console.log(path.join(__dirname, '../../')),
                //outputPath: 'F:/Jasmine/CRM/vendorcompany/reports',
                outputPath: './reports',
                outputFilename: '  DNF Test Execution Report',
                screenshotPath: '../reports/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: false,
                testPlatform: platform
            };
            new htmlReporter().from('./reports/xml/xmlresults.xml', testConfig);
        });
    },

    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    maxSessions: 1,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 350000
    }
};

