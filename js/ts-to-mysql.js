"use strict";
//功能 :定义一个能操作数据库的库  支持 mysql  mongoDB
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (value) {
            console.log(value);
            return true;
        };
        MysqlDb.prototype.update = function (value, id) {
            throw new Error("Method not implemented.");
        };
        MysqlDb.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        MysqlDb.prototype.get = function (id) {
            var list = [
                { id: 1, name: '1' },
                { id: 2, name: '2' },
                { id: 3, name: '3' },
                { id: 4, name: '4' }
            ];
            // list.find((item,index)=>item.id == id)
            return list.filter(function (item) { return item.id == id; });
        };
        return MysqlDb;
    }());
    A.MysqlDb = MysqlDb;
})(A = exports.A || (exports.A = {}));
