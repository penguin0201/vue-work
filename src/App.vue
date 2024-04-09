<script >
import Header from './pages/Header.vue';
import Footer from './pages/Footer.vue';
import Home from './pages/Home.vue';

export default {
  components: {
    Header,
    Home,
    Footer
  }
}

</script>

<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>





