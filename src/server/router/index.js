//路由表
var request=require("request");
module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('../views/index.html')
    });//主页入口
    app.get('/nswbmw', function (req, res) {
        console.log('123456');
        res.send(200,JSON.stringify(req.query) );
        // request.get('https://robotmanage.sparta.html5.qq.com/wechat/api/order/getRecentOrders?token=18F718F1710F922FD2D9F653E2C2138A', function (error, response, body) {
        //     console.log(200,body);
        //    res.send(200,'张家浩');
        //     res.end()
        // });
        //res.send('hello,world!');
    });
};