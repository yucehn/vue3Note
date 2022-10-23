// 繼承:類與類之間的關係
// A類繼承了B這個類，則A類為子類，B類則為基類
// 子類---->派生類
// 基類---->超類(父類)
// 出現繼承，則產生父子類關係
(()=>{
    // 定義類
    class Person {
        // 屬性
        name: string
        age: number
        gender: string
        //定義構造函數
        constructor( name: string='jim', age: number=17, gender: string='boy'){
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定義實例方法
        sayHi(str:string){
            console.log(`我是${this.name},${str}`)
        }
    }
    // 定義一個類，繼承自Person
    class Student extends Person {
        constructor( name: string, age: number, gender: string ){
            // 調用的是父類中的構造函數，使用的是super
            super(name,age,gender)
        }
        // 可以調用父類中的方法
        sayHi(): void {
            console.log('學生中的sayHi')
            // 調用父類中的sayHi
            super.sayHi('哈哈')
        }
    }
    // 實例化 Person
    const person = new Person('大名', 20, '男')
    person.sayHi('黑黑')
    // 實例化 Student
    const student = new Student('學生', 15, '女')
    student.sayHi()

    // 總結: 類與類之間如果有繼承關係，需要使用extends
    // 子類中可以調用父類中的構造函數，使用的是super關鍵字(包括調用父類中的實例方法，也可以使用super)
    // 子類中可以重寫父類中的方法
})()