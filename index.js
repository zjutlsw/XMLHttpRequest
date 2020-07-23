const Koa=require("koa");
const static=require("koa-static");
const Router=require("koa-router");
const KoaBody=require("koa-body")
const path=require("path");
const fs=require("fs");


const app=new Koa();;
const router=new Router();
app.use(KoaBody({
    multipart:true
}))
app.use(static(path.resolve(__dirname,'./static')));

router.post("/upload",(ctx)=>{
    console.log(ctx.request.body)
    const {img}=ctx.request.files;
    const readStream=fs.createReadStream(img.path);
    const writeStream=fs.createWriteStream('./static/upload/'+img.name);
    readStream.pipe(writeStream)
    ctx.body={
        status:1,
        msg:"请求成功"
    }
})

app.use(router.routes())
app.listen(3000);