<template>
    <header>
    <h1>模拟计算机模型</h1>
    <nav>
        <ul>
            <li><a><router-link to="/">首页</router-link></a></li>
            <li><a><router-link to="/binarypage">二进制相关原理</router-link></a></li>
            <li><a><router-link to="/memorypage">关于计算机内存</router-link></a></li>
            <li><a><router-link to="/jumppage/jump1">JUMP代码示例</router-link></a></li>
            <li><a><router-link to="/compilepage">高级语言的编译</router-link></a></li>
        </ul>
    </nav>
    </header>
</template>


<style scoped>
header{
    background-color: rgba(51, 210, 238, 0.292);
    height: 80px;
    width: 100%;
    position: fixed;
}
h1{
    color: rgb(206, 146, 146);
    position: relative;
    background-image: url(../assets/title.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 500px;
    height: 80px;
    text-indent: -9999px;
}
header ul{
    position: absolute;
    right: 1vw;
    top: 0;
    line-height: 80px;
    font-size: large;
}
header li{
    list-style: none;;
    display: inline;
    justify-content: center;
    margin-right: 4vw;
}
header a{
    color: white;
    text-decoration: none;
    padding: 10px;
}
header a:hover{
    text-decoration: underline;
}
nav ul li:not(:last-child)::after {
    content: "|";
    margin-left: 30px;
    top: 0;
    bottom: 0;
    background-color: white; /* 设置竖线颜色为白色 */
}
</style>