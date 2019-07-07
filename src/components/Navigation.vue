<template>
    <div>
        <h2>
            <slot name="title"></slot>
        </h2>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ArticleNews extends Vue {

  }
</script>

<style scoped lang="scss">

</style>

