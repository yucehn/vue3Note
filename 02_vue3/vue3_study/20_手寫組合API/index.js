// shallowReactive(淺的劫持，淺的監視，淺的響應式)與reactive

// 定義一個reactiveHandler處理對象
const reactiveHandler = {
    // 獲取屬性值
    get(target, prop) {
        if (prop === "_is_reactive") return true;
        const result = Reflect.get(target, prop);
        console.log("攔截讀取數據", prop, result);
        return result;
    },
    // 修改屬性值 或 添加屬性值
    set(target, prop, value) {
        const result = Reflect.set(target, prop);
        console.log("攔截修改數據 或 添加屬性值", prop, result);
        return result;
    },
    // 刪除某個屬性
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);
        console.log("刪除某個屬性", prop, result);
        return result;
    },
};

// 定義一個shallowReactive函數，傳入一個目標對象
function shallowReactive(target) {
    // 判斷當前的目標對象是不是object類型(對象/數組)
    if (target && typeof target === "object") {
        return new Proxy(target, reactiveHandler);
    }
    //如果傳入的數據是基本類型的數據，那麼就直接返回
    return target;
}

// 定義一個reactive函數，傳入一個目標對象
function reactive(target) {
    // 判斷當前的目標對象是不是object類型(對象/數組)
    if (target && typeof target === "object") {
        // 對數組或對象中所有數據進行reactive的遞迴處理
        // 先判斷當前的數據是不是數組
        if (Array.isArray(target)) {
            // 數組的數據進行遍歷操作
            target.array.forEach((element, index) => {
                target[index] = reactive(element);
            });
        } else {
            // 再判斷是不是對象
            // 進行遍歷操作
            Object.keys(target).forEach((key) => {
                target[key] = reactive(target[key]);
            });
        }
        return new Proxy(target, reactiveHandler);
    }
    //如果傳入的數據是基本類型的數據，那麼就直接返回
    return target;
}

// ============================

// 定義了一個readonlyHandler處理器
const readonlyHandler = {
    get(target, prop) {
        if (prop === "_is_readonly") return true;
        const result = Reflect.get(target, prop);
        console.log("攔截讀取數據", prop, result);
        return result;
    },
    set(target, prop, value) {
        console.warn(
            "只能讀取數據，不能修改數據或添加數據",
            target,
            prop,
            value
        );
        return true;
    },
    deleteProperty(target, prop) {
        console.warn("只能讀取數據，不能刪除數據", target, prop);
        return true;
    },
};

// 定義一個shallowReadonly函數
function shallowReadonly(target) {
    // 需一判斷當前的數據是不是對象
    if (target && typeof target === "object") {
        return new Proxy(target, readonlyHandler);
    }

    return target;
}

// 定義一個readonly函數
function readonly(target) {
    // 需一判斷當前的數據是不是對象
    if (target && typeof target === "object") {
        // 判斷target是否為數組
        if (Array.isArray(target)) {
            // 遍歷數組
            target.forEach((item, index) => {
                target[index] = readonly(item);
            });
        } else {
            // target是否為對象
            // 遍歷對象
            Object.keys(target).forEach((key) => {
                target[key] = readonly(target[key]);
            });
        }

        return new Proxy(target, readonlyHandler);
    }
    // 如果不適對象或數組，就直接返回
    return target;
}

// 定義一個shallowRef函數
function shallowRef(target) {
    return {
        // 保存target數據保存起來
        _value: target,
        get value() {
            console.log("劫持到了讀取數據");
            return this._value;
        },
        set value(val) {
            console.log("劫持到了修改數據，準備更新介面", val);
            this._value = val;
        },
    };
}
// const ref1 = shallowRef({});
// console.log(ref1.value);
// ref1.value = '';

// 定義一個ref函數
function ref(target) {
    target = reactive(target); // Proxy
    return {
        _is_ref: true, // 標示當前對象是ref對象
        // 保存target數據保存起來
        _value: target,
        get value() {
            console.log("劫持到了讀取數據");
            return this._value;
        },
        set value(val) {
            console.log("劫持到了修改數據，準備更新介面", val);
            this._value = val;
        },
    };
}

// 定義一個函數isRef，判斷當前的對象是不是ref對象
function isRef(obj) {
    return obj && obj._is_ref;
}
// 定義一個函數isReactive ，判斷當前的對象是不是reactive對象
function isReactive(obj) {
    return obj && obj._is_reactive;
}
// 定義一個函數isReadonly，判斷當前的對象是不是readonly對象
function isReadonly(obj) {
    return obj && obj._is_readonly;
}

// 定義一個函數isProxy，判斷當前的對象是不是reactive對象或者是readonly對象
function isProxy(obj) {
    return isReactive(obj) || isReadonly(obj);
}
