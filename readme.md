```
we can run like ./node_modules/mocha/bin/mocha.js

must have a test folder in root of the project.

within test folder , we can have js files with any name.

to run all test files in package.json ,    "test": "mocha"
to run a specific file in package.json ,   "test": "mocha ./test/test1.js"
to run a specific unit test from any file of the project,    "use describe.only and it.only"  to that test. once test is complete , change it back 
```