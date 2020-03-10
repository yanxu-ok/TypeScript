"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_to_mysql_1 = require("./ts-to-mysql");
//建立user表和数据库对应
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var usr = new User();
usr.username = '111';
usr.password = '223';
var db = new ts_to_mysql_1.A.MysqlDb();
db.add(usr);
console.log(db.get(4));
//命名空间 里面的类接口都是私有的，所以里面的类也必须导出
