# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-09-22

### Added

- Added `createMutex` function to create a new mutex on the system.
- Updated `README.md` with new usage instructions for mutex creation.
- Introduced a basic `test.js` file to test both mutex creation and checking functionalities.
- Updated documentation to reflect new feature and usage examples.
- Added a version bump in `package.json` from `1.0.0` to `1.1.0`.

### Changed

- Minor cleanup of `index.js` to support new feature.

## [1.0.0] - 2024-09-10

### Added

- Initial release of `node-mutex-checker`.
- Added the `checkMutex` function to check if a mutex exists on the system.
- Project setup with basic C++ addon code, `binding.gyp`, and `mutex_control.cpp`.
