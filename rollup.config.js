import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
export default {
    input: './src/index.js',  // 入口 以这个入口打包库  new Vue
    output: {
        format: 'umd', // 模块化类型  跟es6的模块化 common.js差不多
        file: 'dist/umd/vue.js', 
        name: 'Vue', // 打包后的全局变量的名字
        sourcemap: true  // 把es6转es5转换后的代码和转换前的代码做一个映射表
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'  //不转义
        }),
        serve({
            open: true,
            openPage: '/index.html',   //打开页面
            port: 3000,    //打开浏览器，端口是3000
            contentBase: ''
        })
    ]
}