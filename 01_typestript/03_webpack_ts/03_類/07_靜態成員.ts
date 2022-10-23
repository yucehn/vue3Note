// 靜態成員: 使用static修飾屬性或方法，則為靜態屬性/靜態方法
// 靜態成員通過.的語法來調用
(()=>{
    // 定義類
    class Person {
        // 靜態屬性
        // 類中默認有一個name屬性，使用static會報錯
        static name1: string = '這是名字1'

        // 構造函數不難用 static修飾
        constructor(name:string){ 
            // 此時this是實例對象，name1是靜態屬性，不能通過實例對象直接調用靜態屬性
            // this.name1 = name
        }
        
        static sayHi(){
            // console.log('sayHi', name)
            console.log('你好啊')
        }
    }

    // 實例化對象
    // const person = new Person('小寧')
    // // 通過實例對象調用屬性(時歷屬性)
    // console.log(person)
    // // 通過實例對象調用方法(實例方法)
    // person.sayHi()

    // 通過類名，靜態屬性的方式訪問該成員數據
    console.log(Person.name1)
    // 通過類名，靜態屬性的方式設置數據
    Person.name1 = '佐助'
    console.log(Person.name1)
    // 通過類名，靜態屬性的方法來調用內部的靜態方法
    Person.sayHi()
})()