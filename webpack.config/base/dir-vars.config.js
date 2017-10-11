/**
 * Created by jyq on 2017/10/11.
 */
const path = require('path');
const moduleExports = {};

// 源文件目录
moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // 项目业务代码根目录
moduleExports.jsDir = path.resolve(moduleExports.srcRootDir, './js');
moduleExports.pageJsDir = path.resolve(moduleExports.jsDir, './page');
// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir, './dist'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = moduleExports;