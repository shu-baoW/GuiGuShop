<template>
  <div>
    <!--    头部-->
    <Header/>
    <!--    中间部分-->
    <router-view></router-view>
    <!--    底部-->
    <Footer v-if="!$route.meta.isFooterHide"/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>