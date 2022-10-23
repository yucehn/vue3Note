// 剩餘參數(rest參數): 只能放在所有參數的最後面
(()=>{
    // ...args:string[] ----> 剩餘參數，放在一個字符串中，args裡面
    const showMsg = (str1:string, str2:string,...args:string[])=>{
        console.log(str1) // a
        // console.log(str2) // b
        console.log(args) // c,d
    }

    showMsg('a','b','c','d');
})()