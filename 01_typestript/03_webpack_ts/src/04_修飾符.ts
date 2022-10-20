// 修飾符(類中的成員的修飾符):主要是描述類中的成員(屬性/構造函數/方法)的可訪問性
// 類中成員都有自己默認訪問的修飾符, public
// public，類中默認修飾符，代表公共，任何位置都可以訪問類中成員
// private，私有，外部無法訪問，子類也無法訪問成員數據
// protected，保護，外部無法訪問，子類中可以訪問該成員數據
(()=>{
    class Person {
        // 屬性 public 修飾屬性成員
        // public  name: String
        // private  name: String
        protected name: string
        // 構造函數
        constructor( name:string ) {
            //更新屬性
            this.name = name
        }
        // 方法
        public eat(){
            console.log('這個真好吃', this.name)
        }
    }

    // 定義子類
    class Student extends Person {
        // 構造函數
        constructor(name: string){
            super(name)
        }
        play(){
            console.log('我就喜歡玩', this.name)
        }
    }

    // 實例化對象
    const per = new Person('大蛇丸')
    // 類的外部可以訪問類中的屬性成員
    // console.log(per.name)
    per.eat()
    const stu = new Student('名人')
    stu.play()
    // console.log(stu.name)
})()