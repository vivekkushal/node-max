const path = require('path');

// variable that helps in constructing a path to the parent directory
module.exports = path.dirname(require.main.filename);

// aliter
// module.exports = require.main.path;
