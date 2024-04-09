<template>
<h1 style="text-align: center;">循环执行</h1>
<div class="jumppicture">
    <img src="../assets/31.png" alt="">
    <img src="../assets/32.png" alt="">
</div>
<div class="box-container">
      <div
        v-for="index in 5"
        :key="index"
        :class="{ 'red-box': activeIndex === index }"
        class="box"
      >
        {{ index }}
      </div>
      <button @click="startProcess" v-if="!isRunning">开始</button>
    </div>
    <p style="display: flex; justify-content: center; font-size: 30px;"><i>执行到4时跳回2，循环3次后跳出循环</i></p>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1,
      count: 0,
      isRunning: false
    };
  },
  methods: {
    startProcess() {
      this.isRunning = true;
      this.interval = setInterval(this.changeColor, 1000);
    },
    stopProcess() {
      clearInterval(this.interval);
      this.isRunning = false;
    },
    changeColor() {
      if (this.activeIndex === 4 && this.count <= 3) {
        this.activeIndex = 2; 
        this.count++;
      } else if (this.activeIndex < 5) {
        this.activeIndex++;
      } else {
        this.count = 0;
        this.activeIndex = 1;
        this.stopProcess();
      }
    }
  }
};
</script>

<style scoped>
.jumppicture{
    display: flex;
    padding: 20px;
    height: 350px;
}
.jumppicture img{
    margin: 20px;
    width: 45%;
}
.box-container {
  display: flex;
    justify-content: center;
}
.box {
    border-radius: 10px;
  width: 50px;
  height: 50px;
  background-color: rgb(147, 147, 223);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.box-container button {
    width: 100px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 2px solid rgb(255, 72, 0);
    border-radius: 5px;
    font-size: large;
}
.box-container button:hover {
    background-color: rgb(227, 102, 52);
    text-decoration: underline;
}
.red-box {
  background-color: red;
}
</style>