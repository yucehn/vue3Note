// 接口是對象的狀態(屬性)和行為(方法)的抽象(描述)
// 接口:是一種類型/規範/規則/能力/約束
(()=>{
    //需求: 创建人的对象, 需要对人的属性进行一定的约束

    // id是number類型, 必須有, 只讀的
    // name是string類型, 必須有
    // age是number類型, 必須有
    // sex是string類型, 可以沒有

    // 定義接口，作為對象類型使用，限定對象屬性
    interface IPerson {
        readonly id: number //readonly 只讀的
        name: string
        age: number
        sex?: string // ? 可以沒有
    }


    //定義一個對象，該對象類型是我定義的接口IPperson
    const person: IPerson = {
        id: 1,
        name: 'AAA',
        age: 10,
        // sex: 'girl'
    }
    console.log(person)
    // person.id = 100 // IPerson不加readonly 此時可讀可寫
    // console.log(person.id)
    person.sex = 'boy'
    console.log(person)
    
})()