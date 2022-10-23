// 泛型: 在定義函數、接口、類的時候，不能預先確定數據類型，
//      而是使用函數、接口、類時才能確定數據類型
(()=>{
    // 需求: 定義一個函數，傳入兩個參數，第一參數是數據，第二參數是數量，
    //      函數作用: 根據數量產生對應數據，存放在數組中

    // 定義函數
    function getArr(value:number, count:number):number[]{
        // 根據數據和數量產生一個數組
        const arr:number[]=[]
        for(let i = 0; i<count;i++){
            arr.push(value)
        }
        return arr
    }

    const arr1 = getArr(100.123,3)
    console.log(arr1)

    function getArr2(value:string, count:number):string[]{
        // 根據數據和數量產生一個數組
        const arr:string[]=[]
        for(let i = 0; i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2('abc',3)
    console.log(arr2)

    // 需求:可以傳入任意類型數據，返回函式儲存這個任意類型數據的數組
    // function getArr3(value:any, count:number):any[]{
    //     // 根據數據和數量產生一個數組
    //     const arr:any[]=[]
    //     for(let i = 0; i<count;i++){
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // const arr3 = getArr3('abc',3)
    // const arr4 = getArr3(100.123,3)
    // console.log(arr3[0].split('')) // 不會提示&報錯
    // console.log(arr4[0].toFixed(2))

    function getArr4<T>(value:T, count:number):T[]{
        // 根據數據和數量產生一個數組
        const arr: T[] = []
        for(let i = 0; i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr4 = getArr4<number>(200.123,3)
    console.log(arr4)
    const arr5 = getArr4<string>('你好',3)
    console.log(arr5)
    console.log(arr4[0].toFixed(2))
    console.log(arr5[0].split(''))


})()