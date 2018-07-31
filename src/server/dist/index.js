'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('dist'));

app.use('/graphql', (0, _expressGraphql2.default)({
    schema: _schema2.default
}));

app.listen(3000, function () {
    return console.log('Listening on port 3000!');
});
app.get('/api', function (req, res) {
    res.send('Hello Express');
});
//# sourceMappingURL=index.js.map
