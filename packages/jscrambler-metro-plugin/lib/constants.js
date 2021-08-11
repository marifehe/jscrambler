const path = require('path');

const BUNDLE_CMD = 'bundle';
const BUNDLE_OUTPUT_CLI_ARG = '--bundle-output';
const BUNDLE_SOURCEMAP_OUTPUT_CLI_ARG = '--sourcemap-output';
const BUNDLE_DEV_CLI_ARG = '--dev';
// path.join so it supports both linux and windows fs
const INIT_CORE_MODULE = path.join(process.platform === 'win32' ? '/' : '', 'node_modules', 'react-native', 'Libraries', 'Core', 'InitializeCore.js');
const JSCRAMBLER_CLIENT_ID = 6;
const JSCRAMBLER_IGNORE = '.jscramblerignore';
const JSCRAMBLER_TEMP_FOLDER = '.jscrambler';
const JSCRAMBLER_DIST_TEMP_FOLDER = `${JSCRAMBLER_TEMP_FOLDER}/dist`;
const JSCRAMBLER_SOURCE_MAPS_TEMP_FOLDER = `${JSCRAMBLER_DIST_TEMP_FOLDER}/jscramblerSourceMaps`;
const JSCRAMBLER_PROTECTION_ID_FILE = `${JSCRAMBLER_TEMP_FOLDER}/protectionId`;
const JSCRAMBLER_BEG_ANNOTATION = '"JSCRAMBLER-BEG";';
const JSCRAMBLER_END_ANNOTATION = '"JSCRAMBLER-END";';
const JSCRAMBLER_EXTS = /.(j|t)s(x)?$/i;
const JSCRAMBLER_SELF_DEFENDING = 'selfDefending';
const JSCRAMBLER_GLOBAL_VARIABLE_INDIRECTION = 'globalVariableIndirection';
const JSCRAMBLER_TOLERATE_BENIGN_POISONING = 'tolerateBenignPoisoning';

module.exports = {
  BUNDLE_CMD,
  BUNDLE_OUTPUT_CLI_ARG,
  BUNDLE_SOURCEMAP_OUTPUT_CLI_ARG,
  BUNDLE_DEV_CLI_ARG,
  INIT_CORE_MODULE,
  JSCRAMBLER_CLIENT_ID,
  JSCRAMBLER_IGNORE,
  JSCRAMBLER_TEMP_FOLDER,
  JSCRAMBLER_DIST_TEMP_FOLDER,
  JSCRAMBLER_SOURCE_MAPS_TEMP_FOLDER,
  JSCRAMBLER_PROTECTION_ID_FILE,
  JSCRAMBLER_BEG_ANNOTATION,
  JSCRAMBLER_END_ANNOTATION,
  JSCRAMBLER_SELF_DEFENDING,
  JSCRAMBLER_GLOBAL_VARIABLE_INDIRECTION,
  JSCRAMBLER_TOLERATE_BENIGN_POISONING,
  JSCRAMBLER_EXTS
}
