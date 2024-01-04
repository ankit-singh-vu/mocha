```
we can run like ./node_modules/mocha/bin/mocha.js

or we can run using "npm test"  . for this we need to define in package.json
must have a test folder in root of the project.

within test folder , we can have js files with any name.

to run all test files using package.json ,    "test": "mocha"
to run all tests in a specific file using package.json ,   "test": "mocha ./test/test1.js"

to run a specific unit test from any file of the project,    "use describe.only and it.only"  to that test. once test is complete , change it back 



more easier way is to install mocha globally . here we don't have to change any code or package.json.
you might have be in sudo to install it globally
npm install --global mocha

then run like 
mocha //run all tests from all files
mocha ./test/test3.js  //run all tests in one file
mocha -g subtract  //run only one unit test


we can use assert or chai
"describe" is just a label of test
"it" will contain the check
```