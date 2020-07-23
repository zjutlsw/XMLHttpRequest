1、异步请求首先要新建对象  xhr=new XMLHttpRequest()
2、通过xhr.open设置（请求类型，地址，是否异步）;
3、通过xhr.send发送异步数据
   通过xhr.onload获取服务端返回结果
   需要设置对应的内容编码xhr.setRequestHeader("content-type'.'application/x-www-form-urlencoded')
   请求内容为username=xx*&password=xxx
   也可以通过json方式传递 设置内容编码 application/json;传输内容也要设置为json数据格式

文件上传 需要通过new FormData()
通过append方法添加参数或者文件
可以通过xhr.upload的一些属性监听上传内容

onprogress上传过程中
onloadstart 开始上传
onloadend 上传结束
onbort 