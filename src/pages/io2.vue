<template>
    <div style="display: flex;">
        <img src="../assets/io2.png" alt="">
        <div style="display: flex; flex-direction: column;margin: 20px;">
            <h1>具体流程</h1>
            <p>处理器向控制器发出 I/O 命令，然后继续执行后续指令。</p>
            <ul>
                <li>如果该进程支持异步 I/O，则继续执行该进程。</li>
                <li>否则，进程在这个中断点挂起，CPU 执行其他程序。</li>
            </ul>
            <ol>
                <li>控制器检查设备状态，就绪后发起中断。</li>
                <li>CPU 响应中断，转向中断处理程序。</li>
                <li>中断处理程序执行数据读写操作。</li>
                <li>恢复执行原先程序。</li>
            </ol>
            <h1>特点</h1>
            <ol>
                <li>CPU 不需要等待 I/O 设备就绪</li>
                <li>CPU 仍需要参与数据传送（响应中断后，原程序会停止执行）</li>
                <li>CPU 和设备部分并行，效率提高</li>
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