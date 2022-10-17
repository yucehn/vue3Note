// 為了使用接口表示函數類型，我們需要給接口定義一個調用簽名。
// 它就像是一個只有參數列表和返回值類型的函數定義。
// 參數列表裡的每個參數都需要名字和類型。
(()=>{
    // 函數類型:通過接口方式作為函數類型的使用

    // 定義接口，類型使用
    interface ISearchFunc {
        // 定義一個調用簽名
        (source: string, subString: string): boolean
    }
    // 定義函數，使用上方定義的接口
    const searchString:ISearchFunc = (source: string, subString: string): boolean =>{
        // 在source字串中找subString這個字串
        return source.search(subString) > -1
    }
    console.log(searchString('哈哈，你好啊','好'))
})()