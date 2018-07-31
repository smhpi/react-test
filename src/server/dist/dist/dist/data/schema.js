'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: function fields() {
            return {
                counter: {
                    type: _graphql.GraphQLInt,
                    resolve: function resolve() {
                        return 42;
                    }
                }
            };
        }
    })

    //mutation
});
exports.default = schema;
//# sourceMappingURL=schema.js.map
//# sourceMappingURL=schema.js.map
//# sourceMappingURL=schema.js.map
//# sourceMappingURL=schema.js.map
//# sourceMappingURL=schema.js.map
//# sourceMappingURL=schema.js.map
