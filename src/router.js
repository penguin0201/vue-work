import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import BinaryPage from './pages/BinaryPage.vue';
import CompilePage from './pages/CompilePage.vue';
import JumpPage from './pages/JumpPage.vue';
import MemoryPage from './pages/MemoryPage.vue';
import Jump1 from './pages/1.vue';
import Jump2 from './pages/2.vue';
import Jump3 from './pages/3.vue';
import About from './pages/about.vue';
import BootPage from './pages/BootPage.vue';
import io1 from './pages/io1.vue';
import io2 from './pages/io2.vue';
import io3 from './pages/io3.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            component: Home
        },
        { 
            path: '/about', 
            component: About
        },
        {
            path: '/bootpage',
            component: BootPage
        },
        { 
            path: '/binarypage', 
            component: BinaryPage
        },
        { 
            path: '/compilepage', 
            component: CompilePage
        },
        { 
            path: '/jumppage', 
            component: JumpPage,
            children: [
                {
                    path: '/jumppage/jump1',
                    component: Jump1
                },
                {
                    path: '/jumppage/jump2',
                    component: Jump2
                },
                {
                    path: '/jumppage/jump3',
                    component: Jump3
                }
            ]
        },
        { 
            path: '/memorypage', 
            component: MemoryPage,
            children: [
                {
                    path: '/memorypage/io1',
                    component: io1
                },
                {
                    path: '/memorypage/io2',
                    component: io2
                },
                {
                    path: '/memorypage/io3',
                    component: io3
                }
            ]
        }
    ]
});

export default router;



// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "./pages/Home.vue";
// import BinaryPage from "./pages/BinaryPage.vue";

// Vue.use(VueRouter);

// const routes = [
//   { path: "/", component: Home },
//   { path: "/binarypage", component: BinaryPage }
// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;