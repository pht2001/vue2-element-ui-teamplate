<template>
  <div class="sidebar-container" :style="variables">
    <el-menu
      :default-active="$route.meta.index"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      unique-opened
    >
      <template v-for="item in routesChild">
        <el-submenu v-if="item?.children?.length && !item.hidden" :key="item.path" :index="item.path">
          <template #title>
            <i v-if="item.meta?.iconType === 'default'" class="el-icon iconfont" :class="`icon-${item.meta.icon}`" />
            <i v-else-if="item.meta?.iconType === 'element-ui'" :class="item.meta?.icon" />
            <svg-icon v-else :icon-class="item.meta?.icon" />
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="it in item.children">
            <el-menu-item v-if="!it.hidden" :key="it.path" :route="{ path: item.path + '/' + it.path }" :index="it.meta?.index">{{ it.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-if="!item?.children?.length && !item.hidden" :key="item.path" :route="{ path: item.path }" :index="item.meta?.index">
          <i v-if="item.meta?.iconType === 'default'" class="el-icon iconfont" :class="`icon-${item.meta.icon}`" />
          <i v-else-if="item.meta?.iconType === 'element-ui'" :class="item.meta?.icon" />
          <svg-icon v-else last-class-name="el-icon" :icon-class="item.meta?.icon" />
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import variables from '@/styles/variables.module.scss'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    routesChild() {
      return this.$router.options.routes.filter(item => item.name === 'Layout')[0].children
    },
    isCollapse() {
      return !!(this.$store.state.app.isCollapse)
    },
    variables() {
      return variables
    }
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
.el-menu-item, .el-submenu__title {
  text-align: left;
}
.sidebar-container {
  height: 100%;
  position: relative;
  background-color: var(--menuBg);
  .el-menu {
    border-right: none;
    background-color: var(--menuBg);
    .el-submenu {
      .el-submenu__title {
        font-size: 14px;
        color: var(--menuText);
        &:hover {
          background-color: var(--menuHoverBg);
          color: var(--menuHoverText);
        }
      }
      .el-menu-item {
        padding-left: 56px !important;
        background-color: var(--subMenuBg);
      }
      &.is-active {
        .el-submenu__title {
          color: var(--menuActiveText);
          > i {
            color: var(--menuActiveText);
          }
        }
      }
    }
    .el-menu-item {
      color: var(--menuText);
      font-size: 14px;
      > i {
        transition: color .3s;
      }
      &.is-active {
        background-color: var(--menuActiveBg) !important;
        color: var(--menuActiveText);
      }
      &:hover {
        background-color: var(--menuHoverBg);
        color: var(--menuHoverText);
        > i {
          color: var(--menuHoverText);
        }
      }
    }
  }
  .logo {
    height: 55px;
    display: flex;
    align-items: center;
    background-color: #002140;
    color: #fff;
    > img {
      width: 42px;
      height: 42px;
      margin: 0 14px;
    }
    > h3 {
      font-weight: 400;
      font-size: 18px;
    }
  }
  .collapse-box {
    position: absolute;
    top: 30px;
    right: -44px;
    cursor: pointer;
    font-size: 20px;
    background-color: #fff;
    padding: 8px 12px;
  }
  .menu-types {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 15px;
    background-color: #000c17;
    box-shadow:0px 0px 6px hsla(209, 100%, 40%, 0.57);
    .el-dropdown-link{
      color: #1890ff;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
  }
}
.el-dropdown-bg {
  background-color: #000c17 !important;
  box-shadow:0px 0px 10px hsla(209, 100%, 55%, 0.57);
  border-color:hsla(209, 100%, 45%, 0.706);
  .el-dropdown-menu__item:not(.is-disabled):hover{
    background-color: #ecf5ff;
    color: #66b1ff;
  }
}
.el-menu-vertical-demo {
  // margin-top: 8px;
  &:not(.el-menu--collapse) {
    width: var(--menuWidth);
    min-height: 400px;
  }
}
</style>
