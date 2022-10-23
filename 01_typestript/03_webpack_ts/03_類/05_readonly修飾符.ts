// readonly: 對類中的屬性進行修飾，該屬性成員不能在外部隨意修改
// 構造函數中，可以對readonly進行修改
// 如構造函數沒有任何參數，類中屬性成員使用readonly，則外部不能對屬性值進行更改
// 構造函數可以使用readonly修飾，則該類中就有這個readonly的成員屬性，外部可以訪問，但不能修改
// 構造函數中的參數，可使用public/private/protected，不論哪個修飾，該類都會自動添加一個屬性成員

(()=>{

    // readonly 修飾類中成員的屬性操作
    // class Person {
    //     // 屬性 
    //     // readonly name: string = '名字在哪' // 初始值
    //     name: string
    //     // 構造函數
    //     constructor( name:string = '名字在哪' ) {
    //         //更新屬性
    //         this.name = name
    //     }
    //     // 方法
    //     sayHi(){
    //         console.log('你好', this.name)
    //         // 類中的普通方法中，也不能修改readonly成員屬性值
    //         // this.name = '大田'
    //     }
    // }
    // // 實例化對象
    // const person = new Person('小田')
    // console.log(person)
    // console.log(person.name)
    // 此時無法修改，因name只能讀取
    // person.name = '大田'
    // console.log(person.name)

    // readonly修飾符中的構造函數中的參數(參數屬性)
    class Person {
        // 構造函數
        // 構造函數中，name一旦使用readonly進行修飾，那麼name可以叫參數屬性
        // 且 Person中有一個name屬性成員
        // 外部無法修改類中name屬性成員
        // constructor ( readonly name:string = '名字在哪' ) {
        //     //更新屬性
        //     // this.name = name
        // }

        // 使用public則可更改name (Person中name是一個 公共 屬性成員)
        constructor ( public name:string = '名字在哪' ) {
        }

        // // 使用private則可更改name (Person中name是一個 私有 屬性成員)
        // constructor ( private name:string = '名字在哪' ) {     
        // }

        // // 使用protected則可更改name 
        // // (Person中name是一個 保護 屬性成員，只能在本類和派生類中訪問及使用)
        // constructor ( protected name:string = '名字在哪' ) {  
        // }
    }
    // 實例化對象
    const person = new Person('小田')
    console.log(person) 
    // person.name = '123456' // 外部無法修改
    console.log(person.name)
})()