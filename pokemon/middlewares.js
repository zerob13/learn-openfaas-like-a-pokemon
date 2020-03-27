const Router = require('@koa/router')
const _ = new Router()
_.get('/num/:id', async (ctx, next) => {
  let pokeid = ctx.params.id
  if (!pokeid) {
    pokeid = 001
  }
  if (pokeid.length == 1) {
    pokeid = `00${pokeid}`
  }
  if (pokeid.length == 2) {
    pokeid = `0${pokeid}`
  }
  const url = `https://cn.portal-pokemon.com/play/pokedex/${pokeid}`
  ctx.status = 302
  ctx.redirect(url)
  await next()
})
exports.default = [_.routes(), _.allowedMethods()]
