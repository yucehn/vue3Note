// 泛型接口:在定義接口時, 為接口中的屬性或方法定義泛型類型
// 在使用接口時, 再指定具體的泛型類型

(()=>{
    // 需求: 定義一個類，用來儲存用戶相關訊息(id/名字/年齡)，
    // 通過一個類的實例對象調用add方法可以添加多個用戶信息對象，
    // 調用getUserId方法可以根據id獲取某個指定用戶信息對象

    // 定義泛型接口
    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t:T)=>T
        getUserId: (id:number)=> T
    }

    // 定義用戶信息的類
    class User {
        id?:number // ?該屬性可有可無
        name: string
        age:number

        constructor(name: string, age:number){
            this.name = name
            this.age = age
        }
    }

    // 定義類，針對用戶信息對象進行增加及查詢的操作
    // CRUD --> create,read,update,delete
    class UserCRUD implements IBaseCRUD<User> {
        // 用來保存多個User類型用戶信息對象
        data: Array<User>=[]
        // 儲存用戶對象
        add(user:User):User { 
            user.id = Date.now()+Math.random()
            this.data.push(user)
            return user

        }
        // 根據id查詢指定用戶對象
        getUserId(id:number):User { 
            return this.data.find(user => user.id === id) || {name:'defalut',age:0}
        }
    }

    // 實例化添加用戶信息對象的類UserCRUD
    const userCRUD:UserCRUD = new UserCRUD()
    userCRUD.add(new User('Jack', 30))
    userCRUD.add(new User('Tom', 1))
    const { id } =  userCRUD.add(new User('lucy', 23))
    console.log(userCRUD.data)
    // userCRUD.add(new User('lucy', 4))
    userCRUD.add(new User('mimi', 6))
    // 根據id查詢
    const user = userCRUD.getUserId(Number(id))
    console.log(user)
})()