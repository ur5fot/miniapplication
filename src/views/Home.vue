<template>
    <div class="home">
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    title: string = 'Home page'
  }
</script>
