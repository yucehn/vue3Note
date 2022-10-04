// 類型註解，是一種輕量級的為函數或變量添加的約束
(() => {
    function showMsg(str) {
        return '床前明月光，' + str;
    }
    let msg = '疑是地上霜';
    // 自動偵測錯誤
    // let msg = 123
    console.log(showMsg(msg));
})();
