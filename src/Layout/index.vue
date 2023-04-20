<template>
  <div class="layout-container">
    <Header />
    <app-main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AppMain from './components/AppMain'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    Header,
    AppMain
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}

</script>

<style lang="scss">
.layout-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
