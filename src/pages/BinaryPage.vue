<template>
    <section class="container">
        <br><br><br><br>
        <div class="aside">
            <el-row class="tac">
                <el-col :span="12">
                    <h5 class="mb-2" style="font-size: 40px;text-align: center;">目录</h5>
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    style="width: 200px;background-color: aliceblue;"
                    >
                    <el-menu-item index="1" @click="scrollToView('int')">
                        <span>整数原理</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="scrollToView('fd')">
                        <span>浮点数原理</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="scrollToView('zhiling')">
                        <span>指令集原理</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="scrollToView('4')">
                        <span>指令集和二进制的对应关系</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>    
        <div class="main">
            <div class="int" id="int">
                <br><br><br><h2>整数原理</h2>
                <label for="number">输入一个整数:</label>
                <el-input-number type="number" id="number" v-model="inputNumber" step="1"/>
                <p>原码: {{ originalCode }}</p>
                <p>反码: {{ complementCode }}</p>
                <p>补码: {{ twosComplementCode }}</p>
                <p>特别的，-0的原码、反码、补码分别为100000000，111111111，000000000</p><br>
                <p>原码：将最高位作为符号位（0表示正，1表示负），其它数字位代表数值本身的绝对值的数字表示方式。<br>
                                    原码存在的问题：
                原码解决了计算机只有加法运算器进行运算的问题，不便进行加减运算。
                <br><br>
                反码：如果是正数，则表示方法和原码一样；如果是负数，符号位不变，其余各位取反，则得到这个数字的反码表示形式。
                <br>
                反码存在的问题：
                反码解决了正负相加， 但负负相加结果错误；<br><br>
                补码：如果是正数，则表示方法和原码一样；如果是负数，则将数字的反码加上1（相当于将原码数值位取反然后在最低位加1）。</p>
                            <br><br>
            </div>
            <div class="fd" id="fd">
                <br><br><br><h2>浮点数原理</h2>
                <div class="float">
                    <div>
                        <img src="../assets/float.png" alt="浮点数原理" width="500" height="300" style="margin: 5px;">
                        <img src="../assets/f1.png" alt="float"width="500" height="300" style="margin: 5px;">
                        <img src="../assets/f2.png" alt="float"width="500" height="300" style="margin: 5px;">
                    </div>
                    <div class="fmain">
                        <p>浮点数的表示方法是将一个数分成三部分，分别是符号、指数、尾数，都是用二进制表示的。</p>
                        <p>且分为规格化的值（exp != 0或255），非规格化的值（exp=0）和特殊值（exp=255）</p>
                        <p>以下以浮点数为例（s：1；  exp：4；  frac：3）</p><br>
                        <label for="float">请输入一个浮点数：</label><el-input-number type="number" id="float" v-model="inputFloat" :step="0.1"/>
                        <p>二进制小数：{{ bfloatCode }}</p>
                        <p>s: {{ sCode }}</p>
                        <p>exp: {{ expCode }}</p>
                        <p>frac: {{ fracCode }}</p><br><br><br> 
                    </div>
                </div>
            </div>
            <div class="zhiling" id="zhiling" >
                <br><br><br><h2>指令集原理</h2>
                <p>指令集是计算机能够识别和执行的指令的集合，是计算机硬件和软件的桥梁。下面是指令集设计原理的一些关键内容：</p>
                <ol>
                    <li>
                        <p><b>指令集架构（ISA）</b>：指令集架构定义了计算机体系结构中处理器所支持的指令集合，包括指令的格式、操作码、寻址方式等。ISA 可以根据指令长度、寻址方式等特征进行分类，常见的 ISA 包括精简指令集（RISC）和复杂指令集（CISC）。</p>
                    </li>
                    <p>______CISC把能用上的电路都用上，一条指令就可以实现一个复杂的功能。例如用一个复杂的电路实现矩阵的乘法，只要给输入就能直接给输出。</p><p>______RISC中的一条指令大多是“基本指令”，它是通过多条指令组合完成一个复杂的功能。同样是计算矩阵的乘法，它需要用到多个整数的加减乘的指令，通过一定的顺序执行得到输出。</p>
                    <br>
                    <li>
                        <p><b>指令格式</b>：指令格式定义了指令在计算机中的存储格式，通常包括操作码（Opcode）、操作数、寻址方式等字段。指令格式的设计需要考虑指令的编码效率、解析复杂度等因素。</p>
                        <img src="../assets/zhiling.png" alt="" style="height: 50px; width: 500px;">
                        <p>______形式寻址类似“函数”，CPU只要把形式地址经过“函数”计算一下，就能得出有效地址。</p><br>
                    </li>
                    <li>
                        <p><b>寻址方式</b>：寻址方式指定了指令中操作数的地址计算方法，主要包括立即寻址、寄存器寻址、直接寻址、间接寻址等。不同的寻址方式影响了指令的执行效率和灵活性。</p>
                        <img src="../assets/xunzhi.png" alt=""><img src="../assets/xunzhi2.png" alt="" style="margin: 20px;height:370px">
                    </li>
                    <li>
                        <p><b>指令流水线</b>：指令流水线是现代处理器中常见的设计技术，通过将指令执行过程划分为多个阶段，可以实现指令的并行执行，提高处理器的性能。</p>
                    </li>
                    <li>
                        <p><b>指令集扩展</b>：指令集扩展是指在原有指令集基础上添加新的指令、功能或指令格式，以支持新的应用需求或优化性能。</p>
                    </li>
                    <li>
                        <p><b>指令优化</b>：指令优化是指在指令集设计中考虑如何优化指令执行的效率和性能，包括指令调度、流水线优化、指令重排等技术。</p>
                    </li>
                    <li>
                        <p><b>指令集架构与微架构</b>：指令集架构定义了处理器对外提供的接口，而微架构则是指处理器内部的具体实现，包括流水线结构、缓存层次结构、乱序执行等。指令集架构和微架构之间的关系影响着处理器的性能、功耗和成本等方面。</p>
                    </li>
                </ol>
            </div>
            <div class="risc-to-binary" id="4" style="white-space: pre-wrap">
                <h2>RISC-V指令集和二进制的对应关系</h2>
                <img src="../assets/risc.png" alt=""><br><br>
                <h4>以下是Greatest Common Divisor（最大公约数）程序，将RISC-V指令转换为二进制机器码的汇编演示</h4>
                <p><i>左边为RISC-V指令示例，右边为机器码，详见网站<a href="https://ascslab.org/research/briscv/simulator/simulator.html#" target="_blank">（https://ascslab.org/research/briscv/simulator/simulator.html#）</a>以及<a href="https://simulator.ascslab-tools.org/simulator.html" target="_blank">(https://simulator.ascslab-tools.org/simulator.html)</a></i></p>
                <div class="texts">
                    <div class="boundry">
                        <el-scrollbar height="400px" always="ture">
                            <p class="scrollbar-demo-item">{{ text1 }}</p>
                        </el-scrollbar>
                    </div>
                    <div class="boundry">
                        <el-scrollbar height="400px" always="ture">
                            <p class="scrollbar-demo-item">{{ text2 }}</p>
                        </el-scrollbar>
                    </div>
                </div>
                <div style="display: flex;">
                    <div>
                        <img src="../assets/risc1.png" alt="" style="width: 700px;height:200px ;">
                        <p style="text-align: center; font-size: 30px;">RISC-V 指令格式</p>
                        <img src="../assets/risc3.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/risc2.png" alt="" style="width: 600px;height:900px ; margin:0px 30px;">
                        <p style="text-align: center; font-size: 26px;">RISC-V架构师从过去指令集设计的错误中吸取的教训。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

               
    export default{
        data() {
        return {
            inputNumber: 0,
            inputFloat: 0,
            originalCode: '',
            complementCode: '',
            twosComplementCode: '',
            sCode: '',
            expCode: '',
            fracCode: '',
            bfloatCode: '',
            text1:`	        addi	zero,zero,0 
                    kernel:             
                        addi	sp,zero,1536
                        call	main        
                        addi	zero,zero,0 
                        mv      s1,a0   
                        addi	zero,zero,0 
                        addi	zero,zero,0 
                        auipc	ra,0x0      
                        jalr	ra,0(ra)    
                        addi	zero,zero,0 
                        addi	zero,zero,0 

                        .file	"gcd.c"
                        .option nopic
                        .text
                        .align	2
                        .globl	gcd
                        .type	gcd, @function
                    gcd:
                        addi	sp,sp,-48
                        sw	ra,44(sp)
                        sw	s0,40(sp)
                        addi	s0,sp,48
                        sw	a0,-36(s0)
                        sw	a1,-40(s0)
                        lw	a4,-36(s0)
                        lw	a5,-40(s0)
                        bne	a4,a5,.L2
                        lw	a5,-36(s0)
                        sw	a5,-20(s0)
                        j	.L3
                    .L2:
                        lw	a4,-36(s0)
                        lw	a5,-40(s0)
                        ble	a4,a5,.L4
                        lw	a4,-36(s0)
                        lw	a5,-40(s0)
                        sub	a5,a4,a5
                        sw	a5,-36(s0)
                        j	.L5
                    .L4:
                        lw	a4,-40(s0)
                        lw	a5,-36(s0)
                        sub	a5,a4,a5
                        sw	a5,-40(s0)
                    .L5:
                        lw	a1,-40(s0)
                        lw	a0,-36(s0)
                        call	gcd
                        sw	a0,-20(s0)
                    .L3:
                        lw	a5,-20(s0)
                        mv	a0,a5
                        lw	ra,44(sp)
                        lw	s0,40(sp)
                        addi	sp,sp,48
                        jr	ra
                        .size	gcd, .-gcd
                        .align	2
                        .globl	main
                        .type	main, @function
                    main:
                        addi	sp,sp,-32
                        sw	ra,28(sp)
                        sw	s0,24(sp)
                        addi	s0,sp,32
                        li	a5,64
                        sw	a5,-20(s0)
                        li	a5,48
                        sw	a5,-24(s0)
                        lw	a1,-24(s0)
                        lw	a0,-20(s0)
                        call	gcd
                        sw	a0,-28(s0)
                        lw	a5,-28(s0)
                        mv	a0,a5
                        lw	ra,28(sp)
                        lw	s0,24(sp)
                        addi	sp,sp,32
                        jr	ra
                        .size	main, .-main
                        .ident	"GCC: (GNU) 7.2.0"
                        addi	zero,zero,0
                        addi	zero,zero,0
                        addi	zero,zero,0
                        addi	zero,zero,0
                        auipc	ra,0x0     
                        jalr	ra,0(ra)   
                        addi	zero,zero,0
                        addi	zero,zero,0
                        addi	zero,zero,0
                        addi	zero,zero,0`,
            text2:`                    STACK SEGMENT
                    FREE SPACE
                    00000000 00000000 00000000 00000000 
                    。。。。。。
                    00000000 00000000 00000000 00000000 
                    HEAP SEGMENT
                    DATA SEGMENT
                    TEXT SEGMENT
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 10000000 11100111 	//	jalr	ra,0(ra)   
                    00000000 00000000 00000000 10010111 	//	auipc	ra,0x0     
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0
                    00000000 00000000 10000000 01100111 	//	jr	ra
                    00000010 00000001 00000001 00010011 	//	addi	sp,sp,32
                    00000000 00000000 01100000 01001000 	//	lw	s0,24(sp)
                    00000000 00000000 01110000 01000001 	//	lw	ra,28(sp)
                    00000000 00000111 10000101 00010011 	//	mv	a0,a5
                    00000000 00111111 10010001 00001111 	//	lw	a5,-28(s0)
                    11111110 10100100 00100010 00100011 	//	sw	a0,-28(s0)
                    Pseudo-instr.	//	call	gcd
                    00000000 00111111 10110001 00001010 	//	lw	a0,-20(s0)
                    00000000 00111111 10100001 00001011 	//	lw	a1,-24(s0)
                    11111110 11110100 00100100 00100011 	//	sw	a5,-24(s0)
                    00000011 00000000 00000111 10010011 	//	li	a5,48
                    11111110 11110100 00100110 00100011 	//	sw	a5,-20(s0)
                    00000100 00000000 00000111 10010011 	//	li	a5,64
                    00000010 00000001 00000100 00010011 	//	addi	s0,sp,32
                    00000000 10000001 00101100 00100011 	//	sw	s0,24(sp)
                    00000000 00010001 00101110 00100011 	//	sw	ra,28(sp)
                    11111110 00000001 00000001 00010011 	//	addi	sp,sp,-32
                    00000000 00000000 10000000 01100111 	//	jr	ra
                    00000011 00000001 00000001 00010011 	//	addi	sp,sp,48
                    00000000 00000000 10100000 01001000 	//	lw	s0,40(sp)
                    00000000 00000000 10110000 01000001 	//	lw	ra,44(sp)
                    00000000 00000111 10000101 00010011 	//	mv	a0,a5
                    00000000 00111111 10110001 00001111 	//	lw	a5,-20(s0)
                    11111110 10100100 00100110 00100011 	//	sw	a0,-20(s0)
                    Pseudo-instr.	//	call	gcd
                    00000000 00111111 01110001 00001010 	//	lw	a0,-36(s0)
                    00000000 00111111 01100001 00001011 	//	lw	a1,-40(s0)
                    11111100 11110100 00101100 00100011 	//	sw	a5,-40(s0)
                    01000000 11110111 00000111 10110011 	//	sub	a5,a4,a5
                    00000000 00111111 01110001 00001111 	//	lw	a5,-36(s0)
                    00000000 00111111 01100001 00001110 	//	lw	a4,-40(s0)
                    00000001 01000000 00000000 01101111 	//	j	.L5
                    11111100 11110100 00101110 00100011 	//	sw	a5,-36(s0)
                    01000000 11110111 00000111 10110011 	//	sub	a5,a4,a5
                    00000000 00111111 01100001 00001111 	//	lw	a5,-40(s0)
                    00000000 00111111 01110001 00001110 	//	lw	a4,-36(s0)
                    00000010 11100111 11011000 01100011 	//	ble	a4,a5,.L4
                    00000000 00111111 01100001 00001111 	//	lw	a5,-40(s0)
                    00000000 00111111 01110001 00001110 	//	lw	a4,-36(s0)
                    00000100 01000000 00000000 01101111 	//	j	.L3
                    11111110 11110100 00100110 00100011 	//	sw	a5,-20(s0)
                    00000000 00111111 01110001 00001111 	//	lw	a5,-36(s0)
                    00000010 11110111 00010000 01100011 	//	bne	a4,a5,.L2
                    00000000 00111111 01100001 00001111 	//	lw	a5,-40(s0)
                    00000000 00111111 01110001 00001110 	//	lw	a4,-36(s0)
                    11111100 10110100 00101100 00100011 	//	sw	a1,-40(s0)
                    11111100 10100100 00101110 00100011 	//	sw	a0,-36(s0)
                    00000011 00000001 00000100 00010011 	//	addi	s0,sp,48
                    00000010 10000001 00100100 00100011 	//	sw	s0,40(sp)
                    00000010 00010001 00100110 00100011 	//	sw	ra,44(sp)
                    11111101 00000001 00000001 00010011 	//	addi	sp,sp,-48
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0 
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0 
                    00000000 00000000 10000000 11100111 	//	jalr	ra,0(ra)    
                    00000000 00000000 00000000 10010111 	//	auipc	ra,0x0      
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0 
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0 
                    00000000 00000101 00000100 10010011 	//	mv      s1,a0   
                    00000000 00000000 00000000 00010011 	//	addi	zero,zero,0 
                    Pseudo-instr.	//	call	main        
                    01100000 00000000 00000001 00010011 	//	addi	sp,zero,1536
                    00000000 00000000 00000000 00010011 	//addi	zero,zero,0 `
        }
    },
    watch: {
        inputNumber: function (val) {
            this.originalCode = this.decimalToBinary(val);
            this.complementCode = this.decimalToComplement(val);
            this.twosComplementCode = this.decimalToTwosComplement(val);
        },
        inputFloat: function (val) {
            this.sCode = this.decimalToS(val);
            this.expCode = this.decimalToExp(val);
            this.fracCode = this.decimalToFrac(val);
            this.bfloatCode = this.toBinaryFloat(val);
        }
    },
    methods: {
        toNum: function (x) {
            let num = '';
            for (let i = 0; i <x.length ; i++) {
                num += x[i];
            }
            return num;
        },
        toBinary: function (num) {
            let x = new Array(32).fill(0);
            if (num < 0) {
                x[0] = 1;
                num = -num;
            }
            let i = x.length - 1;
            while (num > 0 && i > 0) {
                x[i] = num % 2;
                num = Math.floor(num / 2);
                i--;
            }
            return this.toNum(x);
        },
        toBinaryFloat: function (num){
            let mark = num < 0 ? 1 : 0;
            num = Math.abs(num);
            let x = Math.floor(num);
            let y = num - x;
            let xn = new Array;
            let yn = new Array;//长度为20
            let n = 0 ;
            let i = 0;
            while(x>0){
                xn.push(x%2);
                x = Math.floor(x/2);
            }
            xn = xn.reverse();
            while(y>0 && i<10){
                y = y*2;
                yn.push(Math.floor(y));
                y = y - Math.floor(y);
                i++;
            }
            for(let i = xn.length-1 ;i >= 0;i--){
                n+=xn[i]*(Math.pow(10,xn.length-1-i));
            }
            for(let i = 0 ; i<yn.length ; i++){
                n+=yn[i]*(Math.pow(10,-1-i));
                // console.log(n);
            }
            if(mark === 1){
                n = -n;
            }
            // console.log(n);
            return n;
        },
        toFanmaBinary: function (num) {
            //此处可改位数
            let x = new Array(32).fill(0);
            if (num < 0) {
                x[0] = 1;
                num = -num;
            }
            let i = x.length - 1;
            while (num > 0 && i > 0) {
                x[i] = num % 2;
                num = Math.floor(num / 2);
                i--;
            }
            if(x[0]===1)
            {
                for (let i = 1; i < x.length; i++) {
                x[i] = x[i] === 0 ? 1 : 0;
                }
            }
            return this.toNum(x);
        },
        toBumaBinary: function (num) {
            let x = new Array(32).fill(0);
            if (num < 0) {
                x[0] = 1;
                num = -num;
            }
            let i = x.length - 1;
            while (num > 0 && i > 0) {
                x[i] = num % 2;
                num = Math.floor(num / 2);
                i--;
            }
            if(x[0]===1)
            {
                for (let i = 1; i < x.length; i++) {
                x[i] = x[i] === 0 ? 1 : 0;
                }
                for (let i = x.length - 1; i > 0; i--) {
                if (x[i] === 0) {
                    x[i] = 1;
                    break;
                } else {
                    x[i] = 0;
                }
                }
            }
            return this.toNum(x);
        },
        decimalToBinary: function (num) {
            return this.toBinary(num);
        },
        decimalToComplement: function (num) {
            return this.toFanmaBinary(num);
        },
        decimalToTwosComplement: function (num) {
            return this.toBumaBinary(num);
        },
        decimalToS: function (num) {
            return num < 0 ? 1 : 0;
        },
        decimalToExp: function (num) {
            let binary = new Array(4).fill(0);
            let note = 0;
            if(num<0){num=-num};
            if(num<0.015625){
                return '0000';
            }else{
                num = this.toBinaryFloat(num);
                if(num>=1){
                    while(num>=2){
                        num = num/10;
                        note++;
                    }
                }else{
                    while(num<1){
                        num = num*10;
                        note--;
                    }
                }
                note = note + 7;
                let i = 3;
                while(note>0){
                    binary[i] = note%2;
                    note = Math.floor(note/2);
                    i--;
                }
                if(binary[0]===0 && binary[1]===0 && binary[2]===0 && binary[3]===0){
                    return INF;
                }
                return binary[0]+''+binary[1]+''+binary[2]+''+binary[3];
            }
        },
        decimalToFrac: function (num) {
            if(num<0){num=-num};
            let binary = new Array(3).fill(0);
            if(num < 0.015625){
                num = Math.floor(num*512);
                binary[2]=num%2;
                num = Math.floor(num/2);
                binary[1]=num%2;
                num = Math.floor(num/2);
                binary[0]=num%2;
            }else{
                num = this.toBinaryFloat(num);
                if(num>=1){
                    while(num>=2){
                        num = num/10;
                    }
                }else{
                    while(num<1){
                        num = num*10;
                    }
                }
                console.log(num);
                num = Math.floor((num - 1)*1000);
                binary[2]=num%10;
                num = Math.floor(num/10);
                binary[1]=num%10;
                num = Math.floor(num/10);
                binary[0]=num%10;
            }
            return binary[0]+''+binary[1]+''+binary[2];
        },
        scrollToView: function (page) {
            document.getElementById(page).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        },
        handleScrollToView() {
            this.scrollToView();
        }
    }
    }

</script>

<style scoped>
    .container{
    background-image: url(../assets/page.png);
    background-size: cover;
    background-position: center;
    height: 500vh;
    color:rgb(0, 0, 0);
    display: flex;
    /* justify-content: center; */
    }
    .aside{
        position: fixed;
        left: 0;
        top: 10%;
    }
    .main{
        margin-left: 200px;
    }
    .int{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 20px;
    }
    .fd{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        /* margin: 20px;
        padding: 20px; */
    }
    .float{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .fmain{
        display: flex;
        flex-direction: column;
    }
    .zhiling{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 20px;
    }
    .risc-to-binary{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 20px;
    }
    .texts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* align-items: center; */
        margin: 20px;
        padding: 20px;
    }
    .scrollbar-demo-item {
    display: flex;
    left: 0%;
    height: 50px;
    width: 600px;
    margin: 10px;
    }
    .boundry {
        border: 3px solid rgb(115, 43, 9);
        background-color: rgb(159, 238, 217);
        margin: 20px;
        padding: 20px;
    }
</style>
