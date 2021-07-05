<template>
    <div>
        <h3>require.ensure()</h3>
        <i>例：const Demo2 = r => require.ensure([], () => r(require('./demo2/index.vue')), 'Demo1');</i>
        <p>webpack中的require.ensure()可以实现按需加载资源包括js,css等。这里有三个参数，第一个参数是个字符串数组，在所有的回调函数的代码被执行前,
            标明依赖的模块，这些会提前加载，第二个是回调函数，当所有的依赖都加载完成后，webpack会执行这个回调函数。在这个回调函数里面的require的文件会被单独打包成一个chunk,不会和主文件打包在一起，这样就生成了两个chunk,第一次
            加载时只加载主文件，当点击时就会加载单独打包的chunk。第三个参数是给这个模块命名,但是需要另行配置才能将打包的文件名确定为自己想要的文件名，具体配置：http://www.css88.com/doc/webpack2/guides/code-splitting-require/</p>
    </div>  
</template>
