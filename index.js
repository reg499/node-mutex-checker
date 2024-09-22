const mutexControl = require("./build/Release/mutex_control");

/**
 * Check if a mutex exists on the system.
 * @param {string} mutexName - The name of the mutex to check.
 * @returns {boolean} - True if the mutex exists, false otherwise.
 */
function checkMutex(mutexName) {
  return mutexControl.checkMutex(mutexName);
}

/**
 * Create a new mutex on the system.
 * @param {string} mutexName - The name of the mutex to create.
 * @returns {boolean} - True if the mutex was created successfully, false otherwise.
 */
function createMutex(mutexName) {
  return mutexControl.createMutex(mutexName);
}

module.exports = {
  checkMutex,
  createMutex,
};
