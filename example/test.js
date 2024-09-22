const { checkMutex, createMutex } = require("../index");

const mutexName = "mutex123";

while (true) {
  const exists = checkMutex(mutexName);

  if (!exists) {
    const created = createMutex(mutexName);
    console.log(`Mutex created: ${created}`);
  } else {
    console.log(`Mutex already exists. Exiting...`);
    break;
  }

  sleep(10000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
