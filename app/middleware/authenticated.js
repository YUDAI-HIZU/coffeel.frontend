export default function (ctx) {
  if (ctx.store.getters['authenticated']) {
    return
  }
  ctx.redirect('/sign-in')
}