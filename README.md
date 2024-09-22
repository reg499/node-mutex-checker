# [Node Mutex Checker](https://www.npmjs.com/package/node-mutex-checker)

A Node.js addon to check and create mutexes on Windows systems using C++ bindings. This project provides the functionality to check for the existence of a mutex on the system and create a new mutex if needed.

```bash
npm i node-mutex-checker
```

## Usage

```javascript
const { createMutex, checkMutex } = require("node-mutex-checker");

const mutexName = "mutex123";

const created = createMutex(mutexName);
console.log(`Mutex created: ${created}`);

const exists = checkMutex(mutexName);
console.log(`Mutex exists: ${exists}`);
```
