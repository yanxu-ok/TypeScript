import {A} from './ts-to-mysql'

//建立user表和数据库对应
class User {
    username: string | undefined;
    password: string | undefined;
}
let usr = new User();
usr.username = '111';
usr.password = '223';

let db = new A.MysqlDb<User>();
db.add(usr);
console.log(db.get(4))
//命名空间 里面的类接口都是私有的，所以里面的类也必须导出
