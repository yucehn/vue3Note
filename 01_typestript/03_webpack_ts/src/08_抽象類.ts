// 抽象類: 抽象方法一班沒有具體內容的實現，可以包含實例化方法，
// 抽象類是不能被實例化，為了讓子類進行實例化及實現內部的抽象方法

// 抽象類的目的，都是為了子類服務

(()=>{
    // 定義類
    abstract class Animal{
        // 抽象方法
        abstract name: string
        // =>抽象方法不能有具體實現
        // abstract eat(){
        //     console.log('趴著吃')
        // }

        // 實例方法
        sayHi(){
            console.log('你好啊')
        }
    }
    // 定義一個子類(派生類)Dog
    class Dog extends Animal {
        name: string = '小黃'
        // 重新實現抽象類中的方法，此時的方法就是當前Dog類的實例方法
        eat(){
            console.log('舔著吃')
        }
    }

    // 實例化Dog的對象
    const dog:Dog = new Dog()
    dog.eat()
    // 抽象類的實例方法
    dog.sayHi()
    console.log(dog.name)

    // 實例化抽象類的對象
    // const ani:Animal = new Animal()
})()