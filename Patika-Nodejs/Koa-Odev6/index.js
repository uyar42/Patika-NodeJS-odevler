import Koa from "koa";
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path !== "/") {
    return await next();
  }

  ctx.body = "<h1>INDEX</h1>";
});

app.use(async (ctx, next) => {
  if (ctx.path !== "/contact") {
    return await next();
  }

  ctx.body = "<h1>CONTACT</h1>";
});

app.use(async (ctx, next) => {
  if (ctx.path !== "/about") {
    return await next();
  }

  ctx.body = "<h1>ABOUT</h1>";
});

const port = 3000
app.listen(port,()=>{
  console.log(`${port} numaralı porttan bağlantı sağlanmıştır`);})

