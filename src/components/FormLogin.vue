<template>
    <div class="form-login">
        <h2>{{ title }}</h2>
        <form @submit.prevent="onLogin">
            <label class="item">
                <span>User name:</span>
                <input v-model="name" type="text">
            </label>
            <label class="item">
                <span>Password:</span>
                <input v-model="password" type="password">
            </label>
            <p class="item">
                <button  type="submit">Login</button>
            </p>
        </form>
        <p v-if="isError">Имя пользователя или пароль введены не верно</p>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { LoginInterface } from "@/models/LoginInterface";
  import { ActionsEnum } from "@/constants/ActionsEnum";
  import { RoutesEnum } from "@/constants/RoutesEnum";

  @Component
  export default class FormLogin extends Vue {
    title: string = 'Login Form';
    login: LoginInterface = {
      name: '',
      password: ''
    };

    isError: boolean = false;

    onLogin() {
      let { name: serveName, password: servePassword } = this.$store.getters.loginData;

      if ( this.name === serveName && this.password === servePassword ) {
        this.$store.dispatch(ActionsEnum.setLogin, true)
          .then(() => {
            this.$router.push({ name: RoutesEnum.profile });
            this.isError = false
          });
      } else {
        this.isError = true
      }
    }
  }
</script>

<style scoped lang="scss">
    .form-login {
        .item {
            width: 100%;
            display: inline-block;
            margin-top: 1rem;
            input, button {
                width: 50%;
                min-width: 3rem;
                margin: .1rem 1rem;
            }
        }
    }
</style>
