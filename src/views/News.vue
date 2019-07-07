<template>
   <p>{{text}}</p>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Login extends Vue {
     text: string = 'ddd'
  }
</script>
