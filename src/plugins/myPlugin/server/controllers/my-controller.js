'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('myPlugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
