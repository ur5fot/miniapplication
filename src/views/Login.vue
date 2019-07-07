<template>
    <div class="">
        <h1>{{ title }}</h1>
        <form-login/>
    </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import FormLogin from "@/components/FormLogin.vue";

  @Component({
    components: {
      FormLogin,
    },
  })
  export default class Login extends Vue {
    title: string = 'Login page'
  }
</script>
