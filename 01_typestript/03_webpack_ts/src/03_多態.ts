// 多態: 父類型的引用指向子類型的對象，不同類型的對象針對相同方法，產生了不同行為
(()=>{
    // 定義父類
    class Animal {
        // 定義屬性
        name: string
        // 定義構造函數
        constructor(name: string){
            this.name = name;
        }
        // 實例方法
        run(distance:number=3){
            console.log(`跑了${distance}公里`, this.name);
        }
    }
    // 定義子類
    class Dog extends Animal {
        // 定義構造函數
        constructor(name: string){
            // 調用父類的構造函數，實現子類中的初始化操作
            super(name);
        }
        // 實例方法，重寫父類中的實例方法
        run(distance:number=15){
            console.log(`跑了${distance}公里`, this.name);
        }
    }
    // 定義子類
    class Pig extends Animal {
        // 定義構造函數
        constructor(name: string){
            // 調用父類的構造函數，實現子類中的初始化操作
            super(name);
        }
        // 實例方法，重寫父類中的實例方法
        run(distance:number=5){
            console.log(`跑了${distance}公里`, this.name);
        }
    }
    // 實例化父類對象
    const ani: Animal = new Animal('cat');
    ani.run();

    const dog: Dog = new Dog('大黃');
    dog.run();

    const pig: Pig = new Pig('佩佩');
    pig.run(9);

    console.log('===========')
    // 父類和子類的關係: 父子關係，父類類型創建子類的對象
    const dog1: Dog = new Dog('小黃')
    dog1.run()
    const pig1: Pig = new Pig('小佩');
    pig1.run();

    console.log('===========')
    
    // 該函數需要的參數是Animal類型的
    const showRun = (ani: Animal)=>{
        ani.run()
    }

    showRun(dog1)
    showRun(pig1)
})()