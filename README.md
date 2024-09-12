# [node-mutex-checker](https://www.npmjs.com/package/node-mutex-checker)
```bash
npm i node-mutex-checker
```
## Usage 
```javascript
const { checkMutex } = require("node-mutex-checker");

const mutexName = "mutex123";

if (checkMutex(mutexName)) {
  console.log("Mutex exists.");
} else {
  console.log("Mutex does not exist.");
}
```
