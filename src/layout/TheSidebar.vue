<template>
  <div
    class="overlay-aside"
    :class="{
      'mask-up': setting.showSidebar === true,
    }"
    @click="setting.onToggleSidebar(false)"
  ></div>
  <div class="aside-menu transition duration-500 scroll-custom" :class="[setting.showSidebar ? 'translate-x-0' : '-translate-x-full']">
    <div class="menu-list">
      <div v-for="(item, index) in customRoute" :key="index">
        <SidebarItem
          :active="item.path === $route.path"
          :has-dropdown="item.dropdown"
          :dropdown-open="item.isOpen"
          @toggle="item?.dropdown ? (item.isOpen = !item.isOpen) : $router.push(`${item.path}`)"
        >
          <template #icon-start>
            <i class="bx bx-sm" :class="[`${item.icon}`]"></i>
          </template>
          {{ item.title }}
          <template #dropdown v-if="item.dropdown">
            <div v-for="(sub, index) in item.route" :key="index">
              <SidebarItem :active="sub.path === $route.path" @toggle="$router.push(sub.path)" :dropdown-open="item.isOpen">
                {{ sub.title }}
              </SidebarItem>
            </div>
          </template>
        </SidebarItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SidebarItem from "../components/SidebarItem.vue";
import { useSettingStore } from "../store/setting";

const setting = useSettingStore();

const enumPage = {
  account: "/account",
  marketplace: "/marketplace",
  nfts: "Nfts",
  farms: "Farms",
  one: "/one",
  two: "/two",
  three: "/three",
  four: "/four",
};

const customRoute = reactive([
  {
    title: "Account",
    path: "/account",
    icon: "bx-user",
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    icon: "bx-home-alt",
  },
  {
    title: "NFTs",
    dropdown: true,
    isOpen: false,
    icon: "bx-moon",

    route: [
      {
        title: "One",
        path: "/one",
      },
      {
        title: "Two",
        path: "/two",
      },
    ],
  },
  {
    title: "Farms",
    dropdown: true,
    isOpen: false,
    icon: "bx-joystick",

    route: [
      {
        title: "Three",
        path: "/three",
      },
      {
        title: "Four",
        path: "/four",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: "bx-info-circle",
  },
  {
    title: "Stake",
    path: "/stake",
    icon: "bxs-zap",
  },
  {
    title: "Swap",
    path: "/swap",
    icon: "bx-dollar-circle",
  },
  {
    title: "Token",
    path: "/token",
    icon: "bxs-bowl-rice",
  },
]);

onMounted(() => {
  const find = customRoute.find((v) => {
    const path = `/${window.location.href.split("/")[4]}`;
    if (v.route) {
      return v.route.find((el) => el.path === path);
    }
  });

  if (find) {
    find.isOpen = true;
  }
});
</script>

<style scoped lang="scss">
.aside-menu {
  position: fixed;
  z-index: 4;
  left: 0;
  top: 68px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: auto;
  background: #fff;
  width: 260px;
  height: calc(100vh - 68px);
  padding-top: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-shadow: 3px 0 9px rgb(0 0 0 / 6%);
  box-shadow: 3px 0 9px rgb(0 0 0 / 6%);
  @apply lg:translate-x-0;
}

.menu-list {
  @apply flex-1;
}

.mask-up {
  background-color: rgba(0, 0, 0, 0.68);
}

.overlay-aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}
</style>
