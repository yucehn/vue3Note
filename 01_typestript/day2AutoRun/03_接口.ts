// 接口:是一種能力，一種約束

(()=>{
    // 定義接口
    interface Iperson{
        firstName:string
        lastName:string
    }

    // 輸出姓名
    function showFullName(person:Iperson){
        return person.firstName+'_'+person.lastName
    }

    const person = {
        firstName: '東方',
        lastName: '不敗'
    }

    console.log(showFullName(person))
})()