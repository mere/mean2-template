var requireDir = require('require-dir')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./gulp', { recurse: true })