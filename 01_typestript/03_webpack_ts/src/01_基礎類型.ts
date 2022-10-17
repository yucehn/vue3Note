// 基礎類型
(()=>{
    // boolean類型
    let flag:boolean = true;
    console.log(flag)

    // 數字類型 浮点数的类型是 number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1);
    // console.log(a2);
    // console.log(a3);
    // console.log(a4);

    // string
    let str:string='床前明月光';
    let str1:string='疑是地上霜';
    let str2:string='123456789';
    console.log(`${str}${str1}${str2}`);

    // string+number
    let str5 = '我有這麼多錢';
    let money = 1000;
    console.log(`${str5}:${money}`);

    console.log('===============')

    let und:undefined = undefined
    let nll:null = null

    console.log(und)
    console.log(nll)
    // undefined & null 都可做為其他類型的子類型，把兩者給其他的賦值
    // let num2:number = undefined // 不能使用嚴格模式  需改成"strict": false, 
    // console.log(num2)

    console.log('===============')

    // 數組類型
    // let 變量名: 數據類型[]=[值1,值2,值3]
    let arr1:number[] = [10,20,30];
    console.log(arr1)
    // 泛型寫法 let 變量名:Array<數據類型>=[值1,值2,值3]
    let arr2:Array<number> = [100,200,300]
    console.log(arr2)

    // 元組類型:再定藝數組時，裡面數據的類型和定義數組的類型要一致，位置及各數需相符合
    let arr3:[string,number,boolean] = ['你好', 0.123, true];
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))

    console.log('===============')
    // 枚舉類型=>枚舉裡面的每個數據都可以叫元素，每個元素都有自己得編號，編號是從0開始，一次遞增加1
    enum Color {
        red=1,
        green,
        blue
    }
    // 定義一個color的枚舉類型的變量來接收枚舉的值
    let color:Color = Color.red;
    console.log(color);
    console.log(Color.red, Color.green, Color.blue)
    console.log(Color[3]) //值可對應

    // enum Gender {
    //     女,
    //     男
    // }
    // console.log(Gender.女) // 可以用中文，不建議使用
    console.log('===============')
    
    // any 類型
    // let anyStr:any = 100
    // anyStr = '變成字串'
    // console.log(anyStr)

    // 當一個數組要存儲多個數據，個數不確定，類型不確定，此時可使用any定義數組
    let anyArr: any[] = [100,'又是字串', true]
    console.log(anyArr)
    // any無法在編譯時報錯 console.log(anyArr[0].split(''))

    // void 類型:在函數申明時，小括號後面使用:void，代表是該函數沒有任何返回值
    const shwMsg =():void=>{ //沒有返回值會補上void
        console.log('void來了')
    }
    shwMsg();

    console.log('===============')

    // object類型
    // 定義一個函數，參數是object類型，返回值也是object類型
    function getObj(obj:object):object{
        console.log(obj)
        return {
            name:'jane',
            age: 30
        }
    }
    console.log(getObj({name:'jim',age:20}))
    console.log(getObj(new String('123')))
    console.log(getObj(String))

    console.log('===============')

    // 聯合類型（Union Types）表示取值可以為多種類型中的一種
    // 需求1: 定義一個一個函數得到一個數字或字符串值的字符串形式值
    function getString(str:number|string):string{
        return str.toString();
    }
    console.log(getString('123'))
    // 需求2: 定義一個一個函數得到一個數字或字符串值的長度
    // 類型斷言，告訴編譯器，確定變數的型態(不進行特殊的數據檢查和解構)
    // 類型斷言語法1: <類型>變量名
    // 類型斷言語法2: 值 as 類型
    function getString2(str:number|string):number{
        // return str.toString().length;
        // 如果str本身就是string類型，就沒必要調用toString()
        if((<string>str).length){ //如果存在則為string類型
            //return (<string>str).length;
            return (str as string).length;
        } else {
            return str.toString().length;
        }
    }
    console.log(getString2(12345))
    console.log(getString2('012345'))

    // 類型推測 TS會在沒有明確的指定類型的時候推測出一個類型
    let txt = 100 // number
    // txt = 'abc' // error
    console.log(txt)

    /* 定義變量時沒有賦值, 推斷為any類型 */
    let b10  // any類型
    b10 = 123
    b10 = 'abc'
    console.log(b10)
})()