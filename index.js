// index.js
const mutexControl = require("./build/Release/mutex_control");

/**
 * Check if a mutex exists on the system.
 * @param {string} mutexName - The name of the mutex to check.
 * @returns {boolean} - True if the mutex exists, false otherwise.
 */
function checkMutex(mutexName) {
  return mutexControl.checkMutex(mutexName);
}

module.exports = {
  checkMutex,
};
