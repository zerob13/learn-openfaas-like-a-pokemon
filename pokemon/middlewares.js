const _ = require('koa-route')

exports.default = [
  _.get('/num/:id', async (ctx, next) => {
    ctx.body = `https://cn.portal-pokemon.com/play/pokedex/${id}`
    await next()
  })
]
