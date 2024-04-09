<template>
    <section class="container">
    <br><br><br><br><h1 style="text-align: center;">JUMP代码示例</h1>
    <h2 style="text-align: center;">程序的三种执行顺序:顺序、条件、循环</h2>
      <div>
        <ul class="box">
          <li>
            <img src="../assets/1.png" alt="">
            <div class="text"><router-link to="/jumppage/jump1"><p>顺序执行</p></router-link></div>
          </li>  
          <li>
            <img src="../assets/2.png" alt="">
            <div class="text"><router-link to="/jumppage/jump2"><p>条件（分支）执行</p></router-link></div>
          </li>
          <li>
            <img src="../assets/3.png" alt="">
            <div class="text"><router-link to="/jumppage/jump3"><p>循环执行</p></router-link></div>
          </li>     
        </ul> 
      </div>

      <router-view></router-view>

    </section>
</template>

<script>

</script>

<style scoped>
  .container{
  background-image: url(../assets/page.png);
  background-size: cover;
  background-position: center;
  height: 130vh;
  color:rgb(0, 0, 0);
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  .box{
	width:700px;
	height:340px;
	margin:50px auto;
	border:2px solid #FFF;
	overflow:hidden;
	background-color:rgba(255,255,255,0.3);
	box-shadow:5px 5px 7px rgba(255,255,255,0.5);
}
.box li{
	float:left;
	position:relative;
	width:200px;
	height:370px;
	box-shadow:0 0 25px #000000;
	transition:all 0.5s;
}
.box li .text {
	position:absolute;
	left:0;
	bottom:0;
	font-size:16px;
	width:150%;
	height:60px;
	text-align:center;
	line-height:30px;
	background:#000;
	background-color:rgba(0,0,0,0.7);
  color: white;
  text-decoration: none;
}
.box li .text:hover{
  background-color:rgba(0,0,0,0.9);
}
.box li .text p:hover{
  text-decoration: underline;
}
.box .text p{
  color: white;
}
.box:hover li{
	width:200px;
}
.box li:hover{
	width:300px;
}
</style>