<template>
        <div id="nav">
            <router-link :to="{name: routers.home}">Home</router-link> |
            <router-link :to="{name: routers.login}">Login</router-link> |
            <router-link :to="{name: routers.news}">News</router-link> |
            <router-link :to="{name: routers.profile}">Profile</router-link>
        </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { RoutesEnum } from "@/constants/RoutesEnum";

  @Component
  export default class Navigation extends Vue {
    routers = RoutesEnum;
  }
</script>

<style scoped lang="scss">

</style>

