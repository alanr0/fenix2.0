<template>
  <div>
    <headerComponent/>
    <RouterView>  </RouterView>
    <pagehomeComponent/>
    <footerComponent/>
    <bellComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';
import PageHomeComponent from './pages/page-home.vue';
import BellComponent from './components/btn-bell.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    PageHomeComponent,
    BellComponent
  },
};
</script>

<style>
@import './assets/base.css';
</style>
