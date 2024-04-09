<template>
    <section class="container">
        <br><br><br>
        <div ref="vantaRef" style="width: 100%; height: 90vh">
            <h1 style="font-size: 40px;display: flex;justify-content: center;">计算机开机模型</h1>
        <div class="controller">
            <button @click="click1">BIOS开始执行</button>
            <button @click="click2">BIOS硬件自检</button>
            <button @click="click3">调入0号扇区内容到RAM内存</button>
            <button @click="click4">执行MBR</button>
            <button @click="click5">选择执行操作系统</button>
        </div>
        <!-- <img src="../assets/cpu.png" alt="cpu" style="display: block; margin: 0 auto;"> -->
            <!-- <span class="demonstration">加电开机过程演示</span> -->
        <div class="progress-container">
            <br>
            <!-- <el-progress :percentage=percentage :color="customColors" style="width: 1000px;" /> -->
        </div>
        <el-carousel ref="boot" :interval="2000" type="card" style="width: 1500px; margin: 0 auto;">
            <el-carousel-item v-for="item in 5" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        </div>
    </section>

</template>

<script>
import * as THREE from "three";
import CLOUDS from "vanta/src/vanta.clouds";

export default {
    data() {
        return {
            percentage: 0,
            customColors: {
                color: '#13ce66',
                textColor: '#13ce66',
                trailColor: '#e5e9f2',
                height: '20px'
            }
        }
    },
    methods: {
        click1() {
            this.$refs.boot.setActiveItem(0);
            this.percentage = 20;
        },
        click2() {
            this.$refs.boot.setActiveItem(1);
            this.percentage = 40;
        },
        click3() {
            this.$refs.boot.setActiveItem(2);
            this.percentage = 60;
        },
        click4() {
            this.$refs.boot.setActiveItem(3);
            this.percentage = 80;
        },
        click5() {
            this.$refs.boot.setActiveItem(4);
            this.percentage = 100;
        }
    },
    mounted() {
        this.vantaEffect = CLOUDS({
        el: this.$refs.vantaRef,
        THREE: THREE,
        });
        // 修改颜色时 cells 需要全大写字母 可生效
        VANTA.CLOUDS({
        el: "#your-element-selector",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x69cbef,
        sunGlareColor: 0xb63a0e,
        sunlightColor: 0xf4f3f0,
        speed: 2.00
        });
    },
    beforeDestroy() {
        if (this.vantaEffect) {
        this.vantaEffect.destroy();
        }
    },
}
</script>

<style scoped>
    .container{
    background-image: url(../assets/page.png);
    background-size: cover;
    background-position: center;
    height: 95vh;
    color:rgb(0, 0, 0);
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .controller{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
    .controller button{
        padding: 10px 20px;
        background-color: transparent;
        color: rgb(95, 104, 234);
        border: 2px solid white;
        border-radius: 5px;
        cursor: pointer;
        font-size: large;
        margin: 0 10px;
    }
    .controller button:hover{
        background-color: skyblue;
        text-decoration: underline;
    }
    .progress-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    .demonstration {
    color: var(--el-text-color-secondary);
    }
    .el-carousel {
        height: 500px;
    }
    .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    font-size: 100px;
    }
    .el-carousel__item:nth-child(1) {
    background-image: url(../assets/step1.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .el-carousel__item:nth-child(2) {
    background-image: url(../assets/step2.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .el-carousel__item:nth-child(3) {
    background-image: url(../assets/step3.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .el-carousel__item:nth-child(4) {
    background-image: url(../assets/step4.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .el-carousel__item:nth-child(5) {
    background-image: url(../assets/step5.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
</style>