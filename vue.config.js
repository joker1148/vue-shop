module.exports = {
    devServer:{
        host:"localhost",
        port:8080,
        proxy:{
            "/api":{
                target:"https://www.imooc.com/",
                changeOrigin:true,
                pathRewrite:{
                    "/api":"" //api转换成空
                    //原来  http://localhost:8080/api/common/adver-getadver?callback=__jp0
                    //现在  http://localhost:8080/common/adver-getadver?callback=__jp0
                }
            }
        }
    }
}