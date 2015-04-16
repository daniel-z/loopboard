module.exports = function (Account) {
  Account.observe('before save', function updateTimeStamp(ctx, next) {
    if (ctx.instance) {
      ctx.instance.createdAt = new Date();
    } else {
      ctx.instance.updatedAt = new Date();
    }
    next();
  });
};
