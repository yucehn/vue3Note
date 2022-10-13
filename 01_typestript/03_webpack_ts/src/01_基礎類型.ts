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

})()