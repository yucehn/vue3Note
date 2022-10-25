// 
(()=>{
    // 定義類，類中屬性質的類型不確定，方法中的參數即返回值得類型也是不確定
    // 定義一個泛型
    class GenericNumber<T> {
        // 默認屬性直視泛型類
        defaultValue: T
        add(x: T, y: T): T|void {
            return
        }

        constructor(defaultValue: T) {
            this.defaultValue = defaultValue;
        }
    }
    
    // 實例化對象時在確定泛型
    const g1:GenericNumber<number> = new GenericNumber<number>(100)
    g1.defaultValue = 1001;
    // 相加方法
    g1.add = (x, y)=>{
        return x + y;
    }
    console.log(g1.add(g1.defaultValue,20));

    const g2:GenericNumber<string> = new GenericNumber<string>('你好')
    g2.defaultValue = '你好1';
    // 相加方法
    g2.add = (x, y)=>{
        return x + y;
    }
    
    console.log(g2.add('我要', g2.defaultValue));
})()