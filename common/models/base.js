module.exports = function (Base) {
  Base.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      ctx.instance.createdAt = new Date();
    } else {
      ctx.data.updatedAt = new Date();
    }
    next();
  });
};
