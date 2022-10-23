// 類:可以理解為模板，通過模板可以實例化對象
(()=>{
    // 類的定義及使用
    class Person {
        name: string
        age: number
        gender: string
        // 定義構造函數:為了實例化對象，可直接對屬性進行初始化
        constructor(name:string = '小名',age:number=16,gender:string='女'){
            // 更新對象中的屬性數據
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定義實例方法
        sayHi(str:string){
            console.log(`您好，我是${this.name}，今年${this.age}，是個${this.gender}，`, str)
        }
    }

    // 實例化對象，可以直接進行初始化操作
    const person = new Person('佐助', 18, '男');
    person.sayHi('你叫啥啊?')

})()