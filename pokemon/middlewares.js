const Router = require('@koa/router')
const _ = new Router()
_.get('/num/:id', async (ctx, next) => {
  ctx.body = `https://cn.portal-pokemon.com/play/pokedex/${ctx.params.id}`
  await next()
})
exports.default = [_.routers(), _.allowedMethods()]
