// 接口:是一種能力，一種約束
(() => {
    // 輸出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = {
        firstName: '東方',
        lastName: '不敗'
    };
    console.log(showFullName(person));
})();
