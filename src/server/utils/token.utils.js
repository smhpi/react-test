'use strict';

var createToken = function createToken(auth) {
    return jwt.sign({
        id: auth.id
    }, 'my-secret', {
        expiresIn: 60 * 120
    });
};

module.exports = {
    generateToken: function generateToken(req, res, next) {
        req.token = createToken(req.auth);
        return next();
    },
    sendToken: function sendToken(req, res) {
        res.setHeader('x-auth-token', req.token);
        return res.status(200).send(JSON.stringify(req.user));
    }
};
//# sourceMappingURL=token.utils.js.map
