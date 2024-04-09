<template>
    <main class="container">
        <br><br><br><br>
        <div class="aside">
            <el-row class="tac">
                <el-col :span="12">
                    <h5 class="mb-2" style="font-size: 30px;text-align: center;">目录</h5>
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    style="width: 200px;background-color: aliceblue;"
                    >
                    <el-menu-item index="1" @click="scrollToView('compiler')">
                        <span>高级语言编译</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="scrollToView('jre')">
                        <span>JRE原理讲解</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="scrollToView('java')">
                        <span>Java编译及运行过程</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>   
        <div class="main">
            <div class="compiler" id="compiler">
                <br><br><br><br><br>
                <div class="in ">
                    <h2 style="font-size: 40px;">高级语言编译</h2>
                    <p class="text-center" style="font-size: large;">外接网站Compile Explorer<a href="https://godbolt.org/" target="_blank">(https://godbolt.org/)</a>，可以体验高级语言到汇编语言的编译</p><br>
                    <el-form :model="form">
                        <div class="flex">
                            <el-form-item label="选择语言：" class=" mr-36">
                                <el-select v-model="form.lang" placeholder="请选择语言" style="width:20vh" @change="onlanguagechange">
                                    <el-option v-for="lang in langs" :key="lang" :label="lang.name" :value="lang.id" :id="lang.id">{{ lang.name }}</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="选择编译器">
                                <el-select v-model="form.compiler" placeholder="请选择编译器" style="width: 20vh;" :disabled="compilerselect">
                                    <el-option v-for="compiler in compilers" :key="compiler" :label="compiler.name" :value="compiler.id">{{ compiler.name }}</el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <el-form-item label="源代码">
                            <el-input type="textarea" v-model="form.source" placeholder="请输入源代码" style="width: 70vh;" :rows="24">你好</el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="out">
                    <el-form>
                        <br>
                        <el-button type="primary" @click="onCompiler">编译</el-button>
                        <br>
                        <el-input type="textarea" v-model="result" style="width: 70vh;" readonly=true placeholder="编译结果" :rows="30"></el-input>
                    </el-form>
                </div>
            </div>
            <div class="jre" id="jre">
                <br><br><br>
                <h2 style="font-size: 40px;">JRE原理讲解</h2>
                <p>当使用具有运行时环境（如JRE）的语言（比如Java）编写和运行程序时，代码的运行过程通常包括以下步骤：<br>

1.<b>编写代码</b>：首先，程序员编写源代码文件，这些文件包含了程序的逻辑、功能和结构。<br>

2.<b>编译代码</b>：程序员使用编译器将源代码文件编译成可执行的目标代码。在 Java 中，编译器将源代码编译成字节码文件（.class 文件），这些文件包含了 Java 虚拟机（JVM）可以理解和执行的指令。<br>

3.<b>加载类文件</b>：在运行程序之前，JRE（Java Runtime Environment）会加载并验证编译生成的类文件。JRE负责提供程序运行所需的环境，包括 JVM 和 Java 类库。<br>

4.<b>解释和执行字节码</b>：JVM 接管已加载的类文件，并将其中的字节码指令解释成特定平台上的机器指令。这个过程发生在运行时，确保程序能够在不同平台上运行而无需重新编译。<br>

5.<b>内存管理</b>：JVM 管理程序的内存使用，包括堆内存和栈内存。它负责动态分配内存空间，并通过垃圾回收器回收不再使用的内存，以减少内存泄漏和提高性能。<br>

6.<b>异常处理</b>：当程序执行过程中出现异常时，JVM 负责捕获、传播和处理异常。程序员可以使用 try-catch-finally 块来处理各种异常情况，确保程序的稳定性和可靠性。<br>

7.<b>线程管理</b>：JVM 负责创建和管理线程，允许程序实现并发执行。通过 JVM 提供的线程机制，程序员可以编写多线程程序，实现并发处理和提高性能。<br>

8.<b>类加载和链接</b>：JVM 的类加载器负责将类文件加载到内存中，并进行类的链接工作，包括验证类文件的格式、解析符号引用等，确保程序的正确性和安全性。<br>

9.<b>执行程序</b>：最终，JVM 在其虚拟环境中执行程序，逐行执行代码逻辑，操作数据并生成输出，实现程序设计的功能。<br>

这些步骤共同构成了具有运行时环境（如JRE）的代码运行过程，保障了程序的正确执行和跨平台运行。</p>
                <div class="block text-center">
                    <span class="demonstration"
                    >JRE原理讲解图</span>
                    <el-carousel height="150px":interval="2000" type="card">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="java" id="java">
                <br><br><br>
                <h2 style="font-size: 40px;">Java编译及运行过程</h2>
                <i>Java字节码具有<b style="font-size: 20px; color: brown;">跨平台性</b>，因为它是在虚拟机(JVM)上运行的，而不依赖于特定的硬件或操作系统。</i>
                <p>Java 编译和运行过程通常包括以下步骤：</p>
                <el-carousel height="150px":interval="2000" type="card">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
export default{
    mounted(){
        const getLangs = () => {
            // this.startloader = true;
            axios.get("https://godbolt.org/api/languages").then(response => {
                this.langs = response.data;
                // thisn.startloader = false;
            }).catch(err => {
                console.log(err);
                // this.startloader = false;
            });
        };
        getLangs();
    },
    data(){
        return{
            compilerselect:true,
            langs:[],
            compilers:[],
            Data:[],
            // selectloader:false,
            // resultloader:false,
            // startloader:false,
            form:reactive({
                soucre:"",
                compiler:"",
                options:{
                    userArguments:"",
                    compilerOptions:{
                        producePp :null,
                        produceGccDump:{

                        },
                        produceOptInfo:false,
                        produceIr:null,
                        produceOptPipeline:null,
                        produceDevice:false,
                        overrides:[

                        ]
                    },
                    filters:{

                    },
                    tools:[

                    ],
                    libraries:[

                    ],
                    executeParameters:{
                        args:"",
                        stdin:""
                    }
                },
                lang:"",
                files:[
                    
                ],
                bypassCache:0,
                allowStoreCodeDebug:true
            }),
            result:'' 
        }
    },
    methods: {
        onlanguagechange() {
            this.compilerselect = true;
            // this.selectloader = true;
            axios.get("https://godbolt.org/api/compilers/"+this.form.lang).then(response => {
                this.compilers = response.data;
                this.compilerselect = false;
                // this.selectloader = false;
                this.form.compile='';
            }).catch(err => {
                console.log(err);
                // this.selectloader = false;
            });
        },
        onCompiler(){
            if(this.form.compiler==""){
                alert("请选择编译器");
                return;
            }
            if(this.form.source==""){
                alert("请输入源代码");
                return;
            }
            if(this.form.lang==""){
                alert("请选择语言");
                return;
            }
            this.result="编译中........";
            // this.resultloader=true;
            axios.post("https://godbolt.org/api/compiler/"+this.form.compiler+"/compile",this.form).then(response =>{
                console.log("success");
                this.Data=response.data.asm;
                this.result="";
                for(let i=0;i<this.Data.length;i++){
                    this.result+=this.Data[i].text+'\n';
                }
                // this.resultloader=false;
            }).catch(err => {
                console.log(err);
                // this.resultloader=false;
            });
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
    },
}
</script>

<style scoped>
    .aside{
    position: fixed;
    left: 0;
    top: 10%;
    }
    .container{
    background-image: url(../assets/page.png);
    background-size: cover;
    background-position: center;
    height: 300vh;
    /* justify-content: center; */
    }
    .main{
        height: 100vh;
        color:rgb(0, 0, 0);
        margin-left: 250px;
    }
    .compiler{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* margin: 20px; */
        margin: 20px;
        padding: 20px;
        border: 2px solid rgb(255, 4, 4);
    }
    .out{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .jre{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 2px solid rgb(255, 4, 4);
        margin: 20px;
    }
    .el-carousel {
        height: 500px;
        width: 1200px;
    }
    .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
    }
    .jre .el-carousel__item:nth-child(1) {
        background-image: url(../assets/jre.png);
        background-color: #99a9bf;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 500px;
    }
    .jre .el-carousel__item:nth-child(2) {
    background-image: url(../assets/jdk.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .jre .el-carousel__item:nth-child(3) {
    background-image: url(../assets/jvm.png);
    background-color: #99a9bf;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    }
    .java .el-carousel__item:nth-child(1) {
        background-image: url(../assets/java1.png);
        background-color: #99a9bf;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 500px;
    }
    .java .el-carousel__item:nth-child(2) {
        background-image: url(../assets/java2.png);
        background-color: #99a9bf;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 500px;
    }
    .java .el-carousel__item:nth-child(3) {
        background-image: url(../assets/java3.png);
        background-color: #99a9bf;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 500px;
    }
    .java .el-carousel__item:nth-child(4) {
        background-image: url(../assets/java4.png);
        background-color: #99a9bf;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 500px;
    }
    .java{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 2px solid rgb(255, 4, 4);
        margin: 20px;
    }
</style>