
/**
 * Created by jyq on 2017/10/10.
 */
//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/common/index-list.css");
require("../../css/page/index.less");
import i_l from "../components/i-l"
console.log(i_l);
import l from "../components/commjs"
console.log(l);
let a = "123123123";
$('.g-bd').append('<p class="text">这是由js生成的一句话。</p>'+i_l+l+a);