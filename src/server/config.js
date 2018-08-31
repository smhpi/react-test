'use strict';

module.exports = {
    'facebookAuth': {
        'clientID': '963186923888341',
        'clientSecret': '40fe937ee63eeb8a404a6be6bb1e1788',
        'callbackURL': 'http://localhost:4000/api/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'googleAuth': {
        'clientID': '913263751154-oh91796ocd9obrcg8s4e27dr7ujrd2od.apps.googleusercontent.com',
        'clientSecret': 'GFg_ZRFz4lEylIdJSN1qxOcs',
        'callbackURL': 'http://localhost:4000/auth/google/callback'
    }
};
//# sourceMappingURL=config.js.map
