<template>
    <div style="display: flex;">
        <img src="../assets/io3.png" alt="">
        <div style="display: flex; flex-direction: column;margin: 20px;">
            <p>DMA: 直接存储器访问</p>
            <p>DMA 模块: 模仿处理器来控制主存和设备控制器之间的数据交换</p>
            <h1>具体流程</h1>
            <ol>
                <li>处理器向 DMA 模块发出 I/O 命令</li>
                <li>处理器继续执行其它工作，DMA 模块负责传送全部数据</li>
                <li>数据传送结束后，DMA 中断处理器</li>
            </ol>
            <h1>特点</h1>
            <ol>
                <li>CPU 不会终止原程序的执行（CPU 无须等待 I/O 设备就绪，也无需进行数据传送</li>
                <li>CPU 只在数据传送的开始和结束时参与</li>
                <ul>
                    <li>开始时，CPU 需要对 DMA 模块进行初始化</li>
                    <li>结束时，CPU 响应中断，但不必保存现场</li>
                </ul>
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