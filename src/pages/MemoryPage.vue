<template>
    <section class="container">
      <br><br><br><br>
        <div class="aside">
            <el-row class="tac">
                <el-col :span="12">
                    <h5 class="mb-2" style="font-size: 40px;">目录</h5>
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    style="width: 200px;background-color: aliceblue;"
                    >
                    <el-menu-item index="1" @click="scrollToView('intro')">
                        <span>内存基本介绍</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="scrollToView('segment')">
                        <span>内存分段和分页</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="scrollToView('address')">
                        <span>内存编址</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="scrollToView('io')">
                        <span>处理器计算和I/O</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>  
        <div class="main">
            <div class="intro" id="intro"><br><br><br><br>
                <h1 style="font-size: 40px; text-align: center;">内存基本介绍</h1>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="bottom"
                >
                <template #content>
                    <p style="text-align: center;">
                    由于CPU会读写数据到内存中，那如果是每个程序都直接跟内存物理地址交互，就会存在：A程序写入a数据到内存中，同时B程序修改b数据到内存中。<br/>因为a和b对应的同一个内存物理地址，所以导致b直接覆盖a的数据。那如果这样的话，整个计算机将会乱套。<br/>所以我们的操作系统给出了这个解决方案，就是虚拟内存。
                    </p>
                </template>
                <pre style="font-size: 20px; text-align: left;">
                         从操作系统的角度来看，计算机内存是一个关键的资源，用于存储程序、数据和操作系统本身。内存被分为不同的层次，包括物理内存和虚拟内存。
        
       1.物理内存：物理内存是实际存在于计算机中的硬件内存，通常以RAM（随机存取存储器）的形式存在。操作系统将物理内存分配给正在运行的程序和操作系统本身使用。
       2.虚拟内存（也叫逻辑地址）：虚拟内存是一种扩展了物理内存的概念，它允许操作系统将部分数据和程序存储在硬盘上，以便在物理内存不足时进行交换。
       通过虚拟内存技术，操作系统可以让每个程序都认为它拥有连续的、私有的内存空间。
        
    操作系统利用内存管理单元（MMU）来管理物理内存和虚拟内存之间的映射关系，确保程序能够正确地访问内存而不会相互干扰。
    此外，操作系统还负责内存的分配和回收，以及在需要时进行内存的页面置换操作，以优化内存的利用率和整体性能。

    总的来说，计算机内存在操作系统视角下扮演着至关重要的角色，操作系统负责管理和优化内存资源，确保程序能够高效地运行并且不会相互干扰。
                </pre>
                </el-tooltip>
                <img src="../assets/mmu.png" alt="">
            </div>

            <div class="segment" id="segment"><br><br><br><br>
                <h1 style="font-size: 40px; text-align: center;">内存分段和分页</h1><br>
            <div class="segmentation">
                <h2 style="font-size: 30px"><b>1.</b>内存分段（Segment）</h2>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="top"
                >
                    <template #content>
                        <p style="text-align: center;">
                            早期的8086CPU有20根地址线，最大可寻址内存空间为1MB。而8086的寄存器只有16位，指令指针（IP）和变址寄存器（SI、DI）也是16位的。用16位的地址寻址1MB空间是不可能的。<br>所以就要把内存分段，也就是把1MB空间分为若干个段，每段不超过64KB，在8086中设置4个16位的段寄存器，用于管理4种段：CS是代码段，DS是数据段，SS是堆栈段，ES是附加段。
                        </p>
                    </template>
                    <b style="font-size: 25px; text-align: center;color: brown;"><i>问题1：内存为什么要分段？？？</i></b>
                </el-tooltip>
            <el-tooltip
                class="tip-item"
                effect="dark"
                placement="top"
            >
            <template #content>
                <p style="text-align: center;">
<b>bss段：</b><br>
　　bss段（bss segment）通常是指用来存放程序中未初始化的全局变量的一块内存区域。<br>
　　bss是英文Block Started by Symbol的简称。<br>
　　bss段属于静态内存分配。 <br>
  <br>
<b>data段：</b><br>
　　数据段（data segment）通常是指用来存放程序中已初始化的全局变量的一块内存区域。<br>
　　数据段属于静态内存分配。 <br>
  <br>
<b>text段：</b><br>
　　代码段（code segment/text segment）通常是指用来存放程序执行代码的一块内存区域。<br>
　　这部分区域的大小在程序运行前就已经确定，并且内存区域通常属于只读(某些架构也允许代码段为可写，即允许修改程序)。<br>
　　在代码段中，也有可能包含一些只读的常数变量，例如字符串常量等。 <br>
  <br>
<b>堆（heap）：</b><br>
　　堆是用于存放进程运行中被动态分配的内存段，它的大小并不固定，可动态扩张或缩减。<br>
　　当进程调用malloc等函数分配内存时，新分配的内存就被动态添加到堆上（堆被扩张）；<br>
　　当利用free等函数释放内存时，被释放的内存从堆中被剔除（堆被缩减）。<br>
  <br>
<b>栈(stack)：</b><br>
　　 栈又称堆栈，是用户存放程序临时创建的局部变量，<br>
　　也就是说我们函数括弧“{}”中定义的变量（但不包括static声明的变量，static意味着在数据段中存放变量）。<br>
　　除此以外，在函数被调用时，其参数也会被压入发起调用的进程栈中，并且待到调用结束后，函数的返回值也会被存放回栈中。<br>
　　由于栈的先进先出(FIFO)特点，所以栈特别方便用来保存/恢复调用现场。<br>
　　从这个意义上讲，我们可以把堆栈看成一个寄存、交换临时数据的内存区。 <br>
                </p>
            </template>
            <b style="font-size: 25px; text-align: center;color: brown;"><i>问题2：内存分为哪几段？？？</i></b>
            </el-tooltip>
            <div class="compute">
                <img src="../assets/segment-compute.png" alt="">
                <div>
                    <p><b>分段机制下的虚拟地址由两部分组成，段选择子和段内偏移量</b></p><br>
                    <p><b>1.段选择子</b>就保存在段寄存器里面。段选择子里面最重要的是段号，用作段表的索引。段表里面保存的是这个段的基地址、段的界限和特权等级等。</p>
                    <p><b>2.</b>虚拟地址中的<b>段内偏移量</b>应该位于 0 和段界限之间，如果段内偏移量是合法的，就将段基地址加上段内偏移量得到物理内存地址。</p><br><br>
                    <p>请输入一个八位数</p>
                    <el-input-number type="segment-adress" id="segment-adress" v-model="segmentInput" step="100"/>
                    <p>物理地址为 {{ physicalAddress }}</p>
                    <p>{{ isLegalSegmentAddress }} 合法地址</p>
                    <p>在第 {{ num }} 段内</p>
                </div>
            </div>
            <el-tooltip
            class="tip-item"
            effect="dark"
            placement="top"
            >
            <template #content>
                <p style="text-align: center;">
                    内存分段的不足主要包括以下几个方面：<br>
1.复杂的地址计算：在8086中，内存分段需要通过段地址和偏移地址来计算物理地址，这种方式会增加编程的复杂性，容易引入错误。同时，由于每个段的大小为64KB，存在段之间的重叠和空隙，导致内存管理更加困难。<br>
2.限制寻址空间：由于8086采用的实模式下的内存分段机制，最多只能寻址1MB的物理内存空间，这在当今大容量内存需求下已经显得十分有限。随着计算机系统的发展，1MB的内存空间已经无法满足现代应用的需求。<br>
3.安全性问题：内存分段机制存在一些安全漏洞，比如段越界访问可能会导致程序崩溃或系统不稳定。由于段寄存器的设置是由程序员手动控制的，容易出现错误的段选择和段越界访问。<br>
4.性能影响：由于8086实模式下的分段机制需要进行复杂的地址计算，这会影响程序的执行效率。另外，由于要处理段之间的重叠和交叉访问，会增加内存访问的开销，导致性能下降。<br>
5.不利于保护模式：8086的内存分段机制并不支持现代操作系统中的保护模式，无法提供内存保护、虚拟内存等功能。这在多任务处理、安全性、稳定性等方面存在较大局限性。<br>
综上所述，8086的内存分段机制在当今计算机系统中已经显得不够灵活、高效和安全，因此后续的x86架构在内存管理方面进行了改进，引入了分页机制和保护模式，提高了系统的可靠性和性能。<br>
                </p>
            </template>
            <b style="font-size: 25px; text-align: center;color: brown;"><i>问题3：内存分段的不足？？？</i></b>
            </el-tooltip>
            
            </div>
            <div class="pagementation">
                <h2 style="font-size: 30px"><b>2.</b>内存分页机制（Page）</h2>
                <p>物理内存被划分为一小块一小块，每块被称为帧(Frame)。分配内存时，帧是分配时的最小单位，最少也要给一帧。在逻辑内存中，与帧对应的概念就是页(Page)。</p>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="top"
                >
                    <template #content>
                        <p style="text-align: center;">
                            使得进程的物理地址空间可以是非连续的<br>
                            提高内存利用率
                        </p>
                    </template>
                    <b style="font-size: 25px; text-align: center;color: brown;"><i>问题4：内存分页的作用？？？</i></b>
                </el-tooltip>
                <img src="../assets/page1.png" alt="">
                <div class="hyperpage">
                    <div>
                        <h2>二级页表</h2>
                        <p>在了解二级页表之前，我们说一下一级页表的特点：</p>
                        <ul>
                            <li>一级页表最多容纳1M（4GB/4KB = 1048576）个页表项，每个页表项是4字节，如果页表项全满的话，便需要占据4M空间</li>
                            <li>一级页表中的所有表项必须要提前建好，原因是操作系统要占用4GB虚拟地址空间的高1GB，用户进程占用低3GB</li>
                            <li>每个进程都有自己的页表，进程越多，页表占用空间越大。</li>
                        </ul>
                        <p>综上所述，一级页表必须提前建好，随着进程数增多，页表占用空间越大，如何解决上述问题？那么我们就需要页表在我们需要的时候动态增加，不需要一次性建立好，这种解决方案就是通过二级页表。</p>
                    </div>
                    <img src="../assets/pagement-compute.png" alt="">
                </div>
                <div class="pagecompute">
                    <div class="pict">
                        <img src="../assets/pagement.png" alt="">
                        <img src="../assets/hyperpage.png" alt="">
                    </div>
                    <div class="intr">
                        <h2>二级页表如何获取真实物理地址</h2><br><br>
                        <p>二级页表需要将虚拟地址拆解成3部分，分别为</p>
                        <ul>
                            <li>高10位：用来定位页目录表中的一个页目录项（页目录项中包含页表的物理地址）</li>
                            <li>中间10位：用于在某个页表中定位页表项</li>
                            <li>低12位：页内偏移量</li>
                        </ul><br><br>
                        <p>具体的转换过程如下：</p>
                        <ul>
                            <li>段部件生成虚拟地址</li>
                            <li>用虚拟地址的高10位乘以4，再加上页目录表的物理地址，便是页目录项的物理地址，读取该物理地址处的内容，获得页表的物理地址</li>
                            <li>用虚拟地址的中间10位乘以4，再加上一步获得的页表的物理地址，便是页表项的的物理地址，读取页表项的内容，便可从页表项的数据结构中获取我们需要访问的物理地址</li>
                            <li>将该物理地址再加上虚拟地址的低12位，便是最终我们要访问的物理地址</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ps">
                <h2 style="font-size: 30px"><b>3.综合分页(Paging)和分段(Segmentation)内存管理方案</b></h2>
                <p style="font-size: 17px;">现有的Intel兼容计算机(x86)上，采用的内存管理方案是分段和分页合并的管理方案。<br>
在这个方案中，逻辑地址，如前一节中所说，是由一个段标识符加上一个指定段内相对地址的偏移量，表示为 [段标识符：段内偏移量]。它的逻辑地址转换的过程如下图所示：</p>
                <img src="../assets/progress.png" alt=""><br>
                <p style="font-size: 17px;">Intel 80386的地址转换全过程如下图</p>
                <img src="../assets/fuck.png" alt=""><br><br>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="bottom"
                >
                    <template #content>
                        <p style="text-align: center;">
                            1.分页对程序员是透明的，但是分段需要程序员显式划分每个段。<br>
                            2.分页的地址空间是一维地址空间，分段是二维的。<br>
                            3.页的大小不可变，段的大小可以动态改变。<br>
                            4.分页主要用于实现虚拟内存，从而获得更大的地址空间；分段主要是为了使程序和数据可以被划分为逻辑上独立的地址空间并且有助于共享和保护。<br>
                        </p>
                    </template>
                    <b style="font-size: 25px; text-align: center;color: brown;"><i>问题5：内存分页和分段的区别？？？</i></b>
                </el-tooltip>
            </div>
            </div>

            <div class="address" id="address"><br><br><br><br>
                <h1 style="font-size: 40px; text-align: center;">内存编址和寻址</h1>
                <h2 style="font-size: 25px; text-align: center;">编址</h2>
                <p>我们以一个256MB的内存条为例进行说明：</p>
                <ul>
                    <li><b>1.按字编址：</b>对于这个256M内存来说，它的寻址范围是64M，而每个内存地址可以存储32bit数据。</li>
                    <li><b>2.按字节编址：</b>对于这个256M内存来说，它的寻址范围是256M，而每个内存地址可以存储8bit数据。</li>
                    <li><b>3.按半字编址：</b>对于这个256M内存来说，它的寻址范围是128M，而每个内存地址可以存储16bit数据。</li>
                </ul>
                <p>现在的计算机主要都是采用按字节编址的方式。所以我们可以把内存简单的看成一个线性数组，数组每个元素的大小为8bit，我们称为一个存储单元，<br>
                    对这些存储单元我们从0x00000000开始沿着Rank的访问编址，每8个Cell加1，这样数组里的每个元素都由地址，超过一个Rank的，从上一个Rank的最后一个Cell的地址加1作为基地址。<br>
                    这一点很重要， 这也是为什么对于32位计算机来说，能使用的最多容量的内存为4GB。</p>
                <h2 style="font-size: 25px; text-align: center;">寻址</h2>
                <p>当CPU通过地址总线传过来一个物理地址时，内存条是如何寻找到一个Cell的呢。我们首先要看内存条是如何根CPU连接的</p>
                <img src="../assets/zhi1.png" alt="">
                <p>DDR3 128*64bit*16的地址线情况如上图所示。</p>
                <p style="text-align: center;">当物理地址从MMU单元出来时，CPU会把需要访问的地址当做一个数据给内存控制器，如果不是集成在CPU内部，那么通过DMI总线（CPU链接北桥的总线）传送给北桥，当然这个是会加上一些标识以方便北桥识别，这个数据是需要访问的内存地址， 当北桥（内存控制器）收到这个地址后，通过集成在控制器中的"逻辑映射"， 内存控制器就知道这个地址对应了了那个rank（p-bank），那个L-bank，L-bank中的那个row地址，L-bank中的那个Column地址，及确定了那个CS#信号有效（选择rank），那组bank#信号有效（选择L-bank），然后北桥在遵从SPD设定的内存的时序下按照固定的时序发送CS#信号 bank#信号 row address 、column address 特殊状态下还会有DQM信号、BL信号等等。也就是说从内存控制器出来，然后是选择DIMM,根据片选到Rank,再到Bank，然后在Chip的地址解码器里输出行地址和列地址，定位到Cell。其实这也就是说物理地址要包含行地址、列地址，bank地址、rank信息等。根据上面的表，物理地址可能的构成如下：</p>
                <img src="../assets/zhi2.png" alt="">
            </div>

            <div class="io" id="io"><br><br><br><br>
                <h1 style="font-size: 40px; text-align: center;">处理器计算和I/O</h1>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="top"
                >
                    <template #content>
                        <p>
                            <ol>
                                <li>处理器计算指的是中央处理器（CPU）执行的计算任务。这包括各种算术和逻辑运算，例如加法、减法、乘法、除法、逻辑与、逻辑或等等。</li>
                                <li>处理器的性能通常以时钟速度（频率）、核心数量和架构等指标来衡量。较高的时钟速度和核心数量通常意味着更快的计算能力和更好的多任务处理能力。</li>
                                <li>处理器计算在许多应用程序中都是关键的，特别是需要大量数学运算或逻辑运算的任务，例如科学计算、图形渲染、机器学习等。</li>
                            </ol>
                        </p>
                    </template>
                    <b style="font-size: 25px; text-align: center;color: brown;"><i>问题6：什么是处理器计算？？？</i></b>
                </el-tooltip>
                <el-tooltip
                class="tip-item"
                effect="dark"
                placement="bottom"
                >
                    <template #content>
                        <p>
                            <ol>
                                <li>I/O 指的是计算机与外部设备之间的数据传输。这些设备包括硬盘驱动器、网络接口、键盘、鼠标、显示器、打印机等。</li>
                                <li>I/O 操作包括读取和写入数据到磁盘、发送和接收数据通过网络、从键盘获取用户输入、将数据显示到屏幕上等。</li>
                                <li>I/O 操作的性能通常以数据传输速率和响应时间来衡量。较高的数据传输速率和更低的响应时间通常意味着更快的 I/O 性能。</li>
                                <li>对于大多数应用程序来说，I/O 操作同样是至关重要的，因为它们需要与用户交互、从外部源获取数据、将数据保存到永久存储介质等。</li>
                            </ol>
                        </p>
                    </template>
                    <b style="font-size: 25px; text-align: center;color: brown;"><i>问题7：什么是I/O？？？</i></b>
                </el-tooltip>
                <div class="cpu">
                    <br><br><h1 style="font-size: 30px; text-align: center;">1.CPU一般运行过程</h1>
                    <p style="font-size: 15px; text-align: center;">1.取指;  &ensp;2.译码；&ensp;3.执行；&ensp;4.访存；&ensp;5.写回；</p>
                    <div class="controller">
                        <button v-if="!isDisable1" @click="click1" :disabled="isDisable1">取指</button>
                        <button v-if="!isDisable2" @click="click2" :disabled="isDisable2">译码</button>
                        <button v-if="!isDisable3" @click="click3" :disabled="isDisable3">执行</button>
                        <button v-if="!isDisable4" @click="click4" :disabled="isDisable4">访存</button>
                        <button v-if="!isDisable5" @click="click5" :disabled="isDisable5">写回</button>
                        <button @click="click6">重置</button>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage" />
                    <div v-if="percentage===20" style="display: flex;">
                        <img src="../assets/quzhi.png" alt="" style="width: 400px; margin: 20px;">
                        <Transition name="slide-fade">
                        <p v-if="percentage===20" style="width: 250px;margin:20px;"><b style="font-size: 30px;">取指</b><br><br>取指令（Instruction Fetch，简称IF）阶段是将一条指令从cache或主存中，获取指令到指令寄存器的过程。CPU中有一个程序计数器(Program Counter，简称PC)寄存器，其中保存着将要执行指令的地址。指令读取是通过将PC寄存器的值，输出给cache或者内存，然后由cache或内存返回该值对应地址中的指令。当一条指令被取出后，PC中的数值将根据指令字长度自动递增。</p>
                        </Transition>
                    </div>
                    <div v-if="percentage===40" style="display: flex;">
                        <img src="../assets/yima.png" alt="" style="width: 400px; margin: 20px;">
                        <Transition name="slide-fade">
                        <p v-if="percentage===40" style="width: 250px;margin:20px;"><b style="font-size: 30px;">译码</b><br><br>取出指令后，CPU会立即进入指令译码（Instruction Decode，简称ID）阶段。在指令译码阶段，指令译码器按照预定的指令格式，对取回的指令进行拆分和解释，识别区分出不同的指令类别，以及各种获取操作数的方法。指令有很多种，有进行各种运算的指令、控制下一条命令的指令、对内存进行读写的命令，还有对CPU进行控制的指令。</p>
                        </Transition>
                    </div>
                    <div v-if="percentage===60" style="display: flex;">
                        <img src="../assets/zhixing.png" alt="" style="width: 400px; margin: 20px;">
                        <Transition name="slide-fade">
                        <p v-if="percentage===60" style="width: 250px;margin:20px;"><b style="font-size: 30px;">执行</b><br><br>在取指令和指令译码阶段之后，接着进入执行指令（Execute，简称EX）阶段。此阶段的任务是完成指令所规定的各种操作，实现具体指令的功能。为此，CPU的不同部分的组件被连接起来，以执行所需的操作。例如，执行一个加法运算，ALU将会连接到一组输入和一组输出。输入提供了要进行相加运算的数值，而输出求和后的结果。如果加法运算产生一个，对该CPU处理而言过大的结果，在标志暂存器里，运算溢出(Arithmetic Overflow，简称AO)标志可能会被设置。</p>
                        </Transition>
                    </div>
                    <div v-if="percentage===80" style="display: flex;">
                        <img src="../assets/fangcun.png" alt="" style="width: 400px; margin: 20px;">
                        <Transition name="slide-fade">
                        <p v-if="percentage===80" style="width: 250px;margin:20px;"><b style="font-size: 30px;">访存</b><br><br>根据指令需要，有可能要访问主存，读取操作数，这样就进入了访存取数的阶段。此阶段的任务是：根据指令中的地址码，经过MMU将虚拟地址转化成物理地址，根据物理地址得到操作数，在cache或主存中的地址，并从cache或主存中读取该操作数用于运算。</p>
                        </Transition>
                    </div>
                    <div v-if="percentage===100" style="display: flex;">
                        <img src="../assets/xiehui.png" alt="" style="width: 400px; margin: 20px;">
                        <Transition name="slide-fade">
                        <p v-if="percentage===100" style="width: 300px;margin:20px;"><b style="font-size: 30px;">写回</b><br><br>结果写回（Write Back，简称WB）阶段，一般把执行指令阶段的运行结果数据，写回到内部寄存器中，以便被后续的指令快速地存取。在有些情况下，结果数据也可被写入相对较慢，但较廉价且容量较大的主存。许多指令还会改变程序状态寄存器中标志位的状态，这些标志位标识着不同的操作结果，可被用来影响程序的动作。在指令执行完毕、结果数据写回之后，若无意外事件（如结果溢出等）发生，CPU就接着从程序计数器PC中取得下一条指令地址，开始新一轮的循环，下一个指令周期将顺序取出下一条指令。</p>
                        </Transition>
                    </div>
                </div>
                <div>
                    <br><br>
                    <h1 style="font-size: 30px; text-align: center;">2.I/O操作</h1>
                    <div style="display: flex; margin: 25px">
                        <img src="../assets/io.png" alt="">
                        <p style="margin: 20px; width: 400px;">在计算机中，I/O操作是指计算机与外部设备之间的数据传输。这些外部设备包括硬盘驱动器、网络接口、键盘、鼠标、显示器、打印机等。I/O操作包括读取和写入数据到磁盘、发送和接收数据通过网络、从键盘获取用户输入、将数据显示到屏幕上等。I/O操作的性能通常以数据传输速率和响应时间来衡量。较高的数据传输速率和更低的响应时间通常意味着更快的I/O性能。对于大多数应用程序来说，I/O操作同样是至关重要的，因为它们需要与用户交互、从外部源获取数据、将数据保存到永久存储介质等。</p>
                    </div>
                    <div style="display: flex; margin: 25px">
                        <h1 style="top: 30%;margin: 20px;">I/O设备控制器</h1>
                        <img src="../assets/iocontrol.png" alt="">
                    </div>
                    <div>
                        <h1 style="font-size: 30px; text-align: center;">I/O控制方式</h1>
                        <div class="controller">
                            <router-link to="/memorypage/io1"><button>轮询方式</button></router-link>
                            <router-link to="/memorypage/io2"><button>中断方式</button></router-link>
                            <router-link to="/memorypage/io3"><button>DMA方式</button></router-link>
                        </div>
                        <div style="display: flex;justify-content: center;">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
                <div>
                    <br><br><h1 style="font-size: 30px; text-align: center;">CPU并发+并行</h1>
                    <div style="display: flex;">
                        <img src="../assets/dcpu.png" alt="">
                        <div>
                            <p style="font-size: 20px;">在多核 CPU 中，并发和并行一般都会同时存在，它们都是提高 CPU 处理任务能力的重要手段。</p><br>
                            <p style="font-size: 20px;">在现代计算系统中，处理器计算和 I/O 操作通常是并行执行的。这意味着处理器可以在执行计算任务的同时处理输入和输出操作，从而提高系统的整体性能和响应速度。例如，一个应用程序可能会在后台进行数据计算的同时，响应用户的键盘输入和从网络接收数据。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>

<script>

export default{
    data(){
        return{
            segmentInput: "",
            physicalAddress: "",
            isLegalSegmentAddress: '',
            num: "",
            percentage: 0,
            isDisable1: false,
            isDisable2: true,
            isDisable3: true,
            isDisable4: true,
            isDisable5: true,
        }
    },
    methods:{
        click1(){
            this.isDisable1 = true;
            this.isDisable2 = false;
            this.percentage = 20;
            this.text = '';
            this.index = 0;
        },
        click2(){
            this.isDisable2 = true;
            this.isDisable3 = false;
            this.percentage = 40;
        },
        click3(){
            this.isDisable3 = true;
            this.isDisable4 = false;
            this.percentage = 60;
        },
        click4(){
            this.isDisable4 = true;
            this.isDisable5 = false;
            this.percentage = 80;
        },
        click5(){
            this.isDisable5 = true;
            this.percentage = 100;
        },
        click6(){
            this.isDisable1 = false;
            this.isDisable2 = true;
            this.isDisable3 = true;
            this.isDisable4 = true;
            this.isDisable5 = true;
            this.percentage = 0;
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
        },
        segmentAddressCompute: function(val){
            let d = val % 10000;
            let p = Math.floor(val / 10000);
            return p+d;
        },
        segmentAddressJudge: function(val){
            let x = this.segmentAddressCompute(val);
            if(x >= 1000 && x <= 2000  ||  x >= 3000 && x <= 6000  ||  x >= 6001 && x <= 6500  ||  x >= 7000 && x <= 8000){
                return '是';
            }else{
                return '不是';
            }
        },
        duancompute: function(val){
            let x = this.segmentAddressCompute(val);
            if(x >= 1000 && x <= 2000){
                return 0;
            }else if(x >= 3000 && x <= 6000){
                return 2;
            }else if(x >= 6001 && x <= 6500){
                return 1;
            }else if(x >= 7000 && x <= 8000){
                return 3;
            }else{
                return "非法";
            }
        }
    },
    watch:{
        segmentInput: function(val){
            if(val >= 10000000 && val <= 99999999){
                this.physicalAddress = this.segmentAddressCompute(val);
                this.isLegalSegmentAddress = this.segmentAddressJudge(val);
                this.num =this.duancompute(val);
            }else{
                this.physicalAddress = "非法地址";
                this.isLegalSegmentAddress = '不是';
                this.num = "非法";
            }
        },
    }
}
</script>

<style scoped>
    .container{
    background-image: url(../assets/page.png);
    background-size: cover;
    background-position: center;
    height: 910vh;
    color:rgb(0, 0, 0);
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .aside{
        position: fixed;
        left: 0;
        top: 10%;
    }
    .main{
        margin-left: 200px;
    }
    .intro{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 25px;
    }
    .segment{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 25px;
    }
    .segmentation{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .compute{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .compute img{
        width: 50%;
        margin: 0px 20px;
    }
    .pagementation{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .hyperpage{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .hyperpage img{
        width: 40%;
        margin: 0px 20px;
    }
    .pagecompute{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .pict{
        display: flex;
        flex-direction: column;
    }
    .pict img{
        width: 80%;
        margin:20px;
    }
    .pagecompute .intr{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .ps{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 25px;
    }
    .address{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 25px;
    }
    .io{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(245, 0, 69);
        margin: 20px;
        padding: 25px;
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
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
</style>