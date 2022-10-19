//  類 類型:類的類型，類的類型可以通過接口實現
(()=>{
    // 定義接口
    interface IFly {
        // 該方法沒有任何視線(方法中什麼都沒有)
        fly(): void
    }

    // 定義類，這個類型是上方定義的接口(IFly接口約束Person類)
    class Person implements IFly{
        // 實現接口中的方法
        fly() {
            console.log('我會飛了')
        }
    }
    // 實例化對象
    const person = new Person
    person.fly();

    interface ISwim {
        swim(): void
    }

    // 定義一個類，這個類的類型就是IFly和ISwim(當前這個類可以實現多個接口，一個類同時也可以多個接口進行約束)
    class Person2 implements IFly, ISwim {
        fly(){
            console.log('飛起來2')
        }
        swim(){
            console.log('我會游泳了2')
        }
    }
    const person2 = new Person2
    person2.fly()
    person2.swim()

    // 總結: 類可以通過接口的方式，來定義當前這個類型
    // 類可以實現一個接口或多個接口，要注意，接口中的內容都要真正得實現

    // 接口可以繼承其他的多個接口
    interface IMyFlyAndSwim extends IFly,ISwim {}

    // 定義類，實現 IMyFlyAndSwim 這個接口
    class Person3 implements IMyFlyAndSwim {
        fly(){
            console.log('飛起來3')
        }
        swim(){
            console.log('我會游泳了3')
        }
    }
    const person3 = new Person3
    person3.fly()
    person3.swim()

    // 總結:接口跟接口之間叫繼承(使用extends)，類和接口之間叫實現(使用implements)
})()