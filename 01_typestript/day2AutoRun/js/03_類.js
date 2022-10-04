(() => {
    // 定義類型
    class Person {
        // 定義一個構造器函數
        constructor(firstName, lastName) {
            // 更新屬性數據
            this.firstName = firstName;
            this.lastName = lastName;
            // 姓名
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    // 定義函數
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = new Person('珠格', '孔明');
    console.log(showFullName(person));
})();
