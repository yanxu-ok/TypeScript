//功能 :定义一个能操作数据库的库  支持 mysql  mongoDB

export namespace A {
    interface Idbiface<T> {
        add(value: T): boolean;
        update(value: T, id: number): boolean;
        delete(id: number): boolean;
        get(id: number): any[];
    }

    export class MysqlDb<T> implements Idbiface<T>{ //实现泛型接口本身也需要是个泛型类
        add(value: T): boolean {
            console.log(value);
            return true;
        }
        update(value: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            let list = [
                { id: 1, name: '1' },
                { id: 2, name: '2' },
                { id: 3, name: '3' },
                { id: 4, name: '4' }
            ]
            // list.find((item,index)=>item.id == id)
            return list.filter(item => item.id == id)
        }
    }
}




