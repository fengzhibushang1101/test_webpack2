/**
 * Created by jyq on 2017/10/10.
 */
//引入css
require('../../css/lib/reset.css');
require('../../css/common/global.css');
require('../../css/common/grid.css');
require("../../css/common/index-list.css");
require('../../css/page/list.css');

import i_l from "../components/i-l"
console.log(i_l);

import l from "../components/commjs"
console.log(l);


let html = '';
for(let i = 0; i < 5; i++){
    html += '<li>列表' + (i + 1) + i_l + l + '</li>'
}

$('#list').html(html);