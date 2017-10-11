/**
 * Created by jyq on 2017/10/11.
 */

const path = require("path");

module.exports = {
    path: path.join(__dirname, '../dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '../../dist/',       //模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].js',     //每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
};