const uuidv4 = require('uuid/v4');
const httpCodeErrors = require('./http-code-errors');

// express js middleware to add a random id to all incoming requests so they could later be traced in logs
// usage example:
//   import {generateRequestId} from 'js-helpers';
//   const app = express();
//   app.use(generateRequestId);

module.exports = (req, res, next) => {
	req.id = uuidv4().replace(/-/g, ''); // hex ids without hyphens a easier to seach for in logs
	next();
}
