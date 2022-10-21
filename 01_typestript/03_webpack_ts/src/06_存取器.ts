// 存取器:可以有效控制對 對象中的成員的訪問，通過getters/setters來進行操作
(()=>{
    // 外部可以傳入姓氏和名字，同時使用set/get控制姓名的數據，外部也可以進行修改操作
    class Person {
        firstName: string
        lastName: string
        
        constructor(firstName: string, lastName: string){
            this.firstName = firstName
            this.lastName = lastName
        }
        // 姓名的成員屬性(外不可以訪問，也可以修改)

        // 讀取器---讀取數據
        get fullName(){
            console.log('getting.....')
            // 姓名===>姓+名拼接
            return this.firstName+'_'+this.lastName
        }
        // 設置器---設置/修改數據
        set fullName(val){
            console.log('setting.....')
            // 姓名===>姓氏和名字或取道重新賦值給firstName/lastName
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    // 實例畫對象
    const person:Person = new Person('工藤','新一')
    console.log(person)
    // 獲取該屬性成員屬性
    console.log(person.fullName)
    // 設置該屬性的數據
    person.fullName = '毛利_小五郎'
    console.log(person.fullName)


})()
