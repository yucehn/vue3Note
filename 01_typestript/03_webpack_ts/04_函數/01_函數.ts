// 函數: 封裝可重複使用的代碼，需要時可以調用
(()=>{
    // 函數聲明，命名函數
    function add(x:string,y:string):string{
        return x+y
    }
    const result:string = add('111','222')
    console.log(result)

    //函數表達式，匿名函數
    const add2 = function(x:number,y:number):number{
        return x+y
    }
    console.log(add2(111,222))

    // 函數的完整寫法
    // add3 變量名 函數add3
    // (x:number,y:number) => number 當前函數類型
    // function(x:number,y:number):number 符合上述這個函數類型的值
    const add3: (x:number,y:number) => number = function(x:number,y:number):number{
        return x+y
    }
    console.log(add3(10,30))
})()