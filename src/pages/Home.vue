<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>计算机模型</title>
        <link rel="stylesheet" href="assets/homecss.css">
    </head>
    <body> 
        <div class="main">
        <section class="intro">
        <br>
        <h2>欢迎来到模拟计算机模型网站！</h2>
        <!-- <img src="images/logo.png" alt="泰山学堂"> -->
        <br>
        <p style="font-size: 36px;">这是一个模拟计算机模型的网站，用于展示计算机模型的相关知识</p>
        <img src="../assets/computer.png" alt="电脑">
        <button onclick=""><router-link to="/bootpage"><a href="">开机（boot）</a></router-link></button>
        </section>
    
        <section class="info">
        <div ref="vantaRef" style="width: 100%; height: 200px"></div>
        <div class="banner">
            <p>一些资料</p><br>
            <em><a href="https://baike.baidu.com/item/%E7%BA%A6%E7%BF%B0%C2%B7%E5%86%AF%C2%B7%E8%AF%BA%E4%BE%9D%E6%9B%BC/986797" target="_blank">计算机之父——冯诺依曼</a></em><br>
            <em><a href="https://baike.baidu.com/item/%E8%89%BE%E4%BC%A6%C2%B7%E9%BA%A6%E5%B8%AD%E6%A3%AE%C2%B7%E5%9B%BE%E7%81%B5/3940576" target="_blank">人工智能之父——图灵</a></em><br>
            <em><a href="https://godbolt.org/" target="_blank">查看源码编译对应的指令，有多种编译器和指令集</a></em>
            <br>
            <em><router-link to="/about">了解更多</router-link></em>
        </div>
        </section>
        </div>
    </body>
</template>
    
    
<script>
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";

export default {
  data() {
    return {};
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE,
    });
    // 修改颜色时 cells 需要全大写字母 可生效
    VANTA.BIRDS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 14381274,
      color2: 16443110,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>


<style scoped>
.intro{
    background-image: url(../assets/background.png);
    background-size: cover;
    background-position: center;
    height: 95vh;
    /* background-color: antiquewhite; */
    color:rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.intro h2{
    font-size: 50px;
    margin-bottom: 20px;
    -webkit-text-stroke: #cfa08ad4 1px;
}
.intro p{
    font-size: 20px;
    text-align: center;
    color:#eee4cb;
    margin-bottom: 20px;
}
.intro img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
}
.intro button{
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    font-size: large;
}
.intro button:hover{
    background-color: rgba(72, 199, 201, 0.615);
    text-decoration: underline;
}
.intro a{
    color: white;
    text-decoration: none;
}
.info {
  position: relative;
  .banner {
    z-index: 999;
    position: absolute;
    top: 10%;
    left: 5%;
  }
}
.info p{
    font-size: 25px;
    color: #efe589;
}
.info a{
    color: #ffffff;
    text-decoration: none;
}
.info a:hover{
    text-decoration: underline;
}
</style>