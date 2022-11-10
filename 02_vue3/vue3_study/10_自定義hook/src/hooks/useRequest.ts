import { ref } from 'vue';
// 引入 axios
import axios from 'axios';
// 發送ajax的請求
export default function <T>(url:string){
    const loading = ref(true);
    const data = ref<T>();
    const errMsg = ref('');
    
    axios.get(url).then((response:{data:T})=>{
        loading.value = false;
        data.value = response.data;
    }).catch((error:{message:string})=>{
        loading.value = false;
        errMsg.value = error.message || '未知錯誤'
    })
    return {
        loading,
        data,
        errMsg,
    }
}