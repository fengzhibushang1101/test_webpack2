/**
 * Created by jyq on 2017/10/11.
 */

const glob = require("glob");
const dirVars = require("./base/dir-vars.config");
let options = {
    cwd: dirVars.pageJsDir, // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
};
let configEntry = {};
console.log(dirVars.pageJsDir);
let globInstance = new glob.Glob('*', options);
globInstance.found.forEach((page) => {
    configEntry[page] = dirVars.pageJsDir+'\\'+page+'\\'+page+'.js';
});
module.exports = configEntry;