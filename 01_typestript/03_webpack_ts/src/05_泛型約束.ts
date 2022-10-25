// 如果我們直接對一個泛型參數取 length 屬性,
// 會報錯, 因為這個泛型根本就不知道它有這個屬性
(()=>{
    // 定義接口，用來約束某個類型被需要有length的屬性
    interface ILength{
        // 接口中有length屬性
        length: number
    }

    function getLength<T extends ILength>(x: T):number{
        return x.length
    }

    console.log(getLength<string>('abcdeg'))
    // console.log(getLength<number>(123)) number 類型沒有 length屬性
})()