## This framework is designed for end-to-end testing of webpage

### Tools used:

webdriverIO: WebdriverIO is an open source testing utility for nodejs. It makes it possible to write super easy selenium tests with Javascript in your favorite BDD or TDD test framework. It basically sends requests to a Selenium server via the WebDriver Protocol and handles its response.

cucumberJS: Cucumber.js is a test framework for behavior driven JavaScript development. Cucumber.js tests are written in the human-readable Gherkin language and are stored in feature files that have the feature extension. 

Selenium Server: need to install Selenium, our webdriver. There are a couple of ways of doing this. We can either install it ourselves and run it in the background (in another terminal window), which will work just fine, or we can use a handy standalone server feature of webdriver.io. I’ve chosen to use the standalone server, as it’s quicker and easier. 

Chai: Assertion library 

NodeJs: it’s a JavaScript free and open source cross-platform for server-side programming that allows users to build network applications quickly.

npm package: npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

A package.json file:

lists the packages that your project depends on.
allows you to specify the versions of a package that your project can use using semantic versioning rules.
makes your build reproducible, and therefore much easier to share with other developers.

## Installing tools:

1. Node install:
https://nodejs.org/en/download/

2. Create package.json:
To get a default package.json, run npm init with the --yes or -y flag:
OR: npm init –f (If you want to see the different options available to you, simply run the same command without –f.)

Use following command if you are getting this repo from remote like Git
NPM Package install:
npm install 

3. Intsall WebdriverIO:
npm install webdriverio --save-dev

This command will do two things. It will install webdriver.io and add that piece of information into your package.json file.

4. Install Selenium server:
npm install wdio-selenium-standalone-service --save-dev
This will install the webdriver.io selenium standalone service (and update your package.json file with this new information). Because we have the standalone service, we no longer need to worry about Selenium and if it’s up & running in a terminal window, somewhere. Whenever we run our tests, webdriver.io will now start and stop Selenium when necessary.

5. Install Chai
Install Chai and the Chai/Webdriver.io packages with the following:

npm install chai --save-dev

npm install chai-webdriverio --save-dev

6. Install Reporter "Spec"(by deafult it's "dot" reporter)
By doing this when test is run, you will see the results pass/fail with text report. With default "dot" report, it shows only green dots for passing feature file test case.

npm install wdio-spec-reporter --save-dev

By running above cmd, it adds this to package.json
 {
   "devDependencies": {
   "wdio-spec-reporter": "~0.0.1"
      }
    }

## Create wdio.conf.js file

./node_modules/.bin/wdio config
this will ask bunch of questions:

You will now be asked a bunch of questions. I’ve detailed below the answers you need for this tutorial, but feel free to experiment, of course:

Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: cucumber

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your feature files located?
A: ./features/**/*.feature (just press enter)

Q:Where are your step definitions located?
A: ./features/step-definitions (just press enter)

Q: Which reporter do you want to use?
A: spec

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: Selenium Standalone Service

Q: Shall I install the services for you?
A: Yes (just press enter)

Q: Level of logging verbosity:
A: silent (just press enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost (just press enter)

## on root-> Create Features folder, inside step-definitions folder
mkdir features && cd features

mkdir step-definitions

## Create .feature file  and step*.js file
touch test.feature
touch step-definitions/test-steps.js

## Open wdio.conf.js and add step definition path in Cucumber options as shown:

cucumberOpts: {
        require: [
          './features/step-definitions/*.js'],
          :::
          }
          
## Open wdio.conf and specify framework as "cucumber"
          framework: 'cucumber',
          
## In wdio.conf change reporters from default "dot" to "specs"
           reporters: ['spec'],