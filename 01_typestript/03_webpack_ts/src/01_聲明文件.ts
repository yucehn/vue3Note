// 引入第三方
// import jQuery from 'jquery';

// 使用 jQuery
// jQuery('選擇器')

/* 
當使用第三方庫時，我們需要引用它的聲明文件，才能獲得對應的代碼補全、接口提示等功能。
聲明語句: 如果需要ts對新的語法進行檢查, 需要要加載了對應的類型說明代碼
  declare var jQuery: (selector: string) => any;
聲明文件: 把聲明語句放到一個單獨的文件（jQuery.d.ts）中, ts會自動解析到項目中所有聲明文件
下載聲明文件: npm install @types/jquery --save-dev
*/

import jQuery from 'jquery'; 
jQuery('選擇器')
