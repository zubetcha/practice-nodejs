"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
var port = 8080;
var mockData = [1, 2, 3, 4];
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log('this is logging middleware!!');
            next();
        });
        app.use(express.json());
        this.setRoute();
        app.use(function (req, res, next) {
            res.send({ error: '404 not found error' });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        this.app.listen(port, function () {
            console.log("Example app listening at http://localhost:" + port);
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map