<template>
<div style="display: flex;">
    <img src="../assets/io1.png" alt="">
    <div style="display: flex; flex-direction: column; margin: 20px;">
        <h1>具体流程</h1>
        <p>轮询方式是忙等待的过程。</p>
        <ol>
            <li>处理器向控制器发送一个 I/O 命令</li>
            <li>如果设备未就绪，则反复查看 I/O 状态，直至设备就绪</li>
            <li>执行数据交换</li>
        </ol>
        <h1>特点</h1>
        <ol>
            <li>处理 I/O 请求会终止原程序的执行</li>
            <li>CPU 需要参与数据传送</li>
            <li>CPU 与设备串行工作，效率低下</li>
        </ol>
    </div>
</div>
</template>

<script>

</script>
<style scoped>
h1{
    font-size: 30px;
    margin: 20px;
}
li{
    font-size: 15px;
    margin: 10px;
}
</style>