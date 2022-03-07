module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1e28fc5d99daf83c805726495a27020'),
  },
});
