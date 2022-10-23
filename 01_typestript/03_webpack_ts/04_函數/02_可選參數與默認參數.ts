// 可選參數: 函數聲明時，使用"?"，該參數可傳可不傳值
// 默認參數: 函數聲明時，內部參數有自己的默認值

(()=>{
    // 定義函數:傳入姓氏和名字，可以得到姓名(姓氏+名字=姓名)
    // 需求: 如不傳入內容，則返回默認姓氏
    // 需求: 如只傳姓氏，就返回姓氏
    // 需求: 如傳姓氏和名字，就返回姓名
    const getName =( firstName: string='工藤', lastName?: string)=>{
        // 判斷 名字是否傳入
        if(lastName){
            return firstName+'_'+lastName
        } else {
            return firstName
        }
    }

    // 函數調用
    // 1. 什麼都不傳
    console.log(getName())
    // 2. 傳入姓氏
    console.log(getName('毛利'))
    // 3. 傳入姓氏+名字
    console.log(getName('毛利','小五郎'))

})()
