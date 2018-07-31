'use strict';

var _express3 = require('express');

var _express4 = _interopRequireDefault2(_express3);

var _schema3 = require('./data/schema');

var _schema4 = _interopRequireDefault2(_schema3);

var _expressGraphql3 = require('express-graphql');

var _expressGraphql4 = _interopRequireDefault2(_expressGraphql3);

function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
