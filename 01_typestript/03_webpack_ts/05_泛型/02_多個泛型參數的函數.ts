// 多個泛型參數的函數

(()=>{
    function getMsg<K, V>(value1: K, value2: V): [K, V] {
        return [value1, value2]
    }

    const arr1 = getMsg<string, number>('Jack', 123.111)
    console.log(arr1[0].split(''))
    console.log(arr1[1].toFixed(1))
})()