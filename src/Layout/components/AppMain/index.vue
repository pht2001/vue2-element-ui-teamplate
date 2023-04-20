<template>
  <div class="app-main-container">
    <div class="main-sidebar">
      <Sidebar />
      <div class="fold" @click="$store.commit('app/setIsCollapse', Number(!$store.state.app.isCollapse))">
        <i :class="`el-icon-s-${$store.state.app.isCollapse ? 'unfold' : 'fold'}`" />
      <!-- <i class="el-icon-s-unfold" /> -->
      </div>
    </div>
    <div class="main-content">
      <!-- <router-view /> -->
      <transition name="fade-transform" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar'
export default {
  name: 'AppMain',
  components: {
    Sidebar
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
.app-main-container {
  flex: 1;
  display: flex;
  .main-sidebar {
    // width: 210px;
    position: relative;
    .fold {
      position: absolute;
      font-size: 30px;
      cursor: pointer;
      right: -30px;
      top: 0;
    }
  }
  .main-content {
    flex: 1;
  }
}

// global transition css

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

</style>
