// 函數重載: 函數名字相同，函數的參數及個數不同
// 需求: 我們有一個add函數，它可以接收2個string類型的參數進行拼接，
//       也可以接收2個number類型的參數進行相加



(()=>{
    // 函數重載聲明
    function add(x:string, y:string): string
    function add(x:number, y:number): number

    // 定義函數
    function add(x:string|number, y:string|number): string|number {
        if(typeof x ==='string'&& typeof y ==='string'){
            return x+y // 拼接
        } else if(typeof x ==='number'&& typeof y ==='number') {
            return x+y // 相加
        } else {
            return ''
        }
    }

    console.log(add(10,20));
    console.log(add('工藤', '新一'));
    // console.log(add(0,'你好'));
    // console.log(add('錯誤了沒',0));
})()