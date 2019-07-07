<template>
   <div>
      <h1>{{text}}</h1>
      <button @click="logout">Logout</button>
   </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { ActionsEnum } from "@/constants/ActionsEnum";
  import { RoutesEnum } from "@/constants/RoutesEnum";

  @Component
  export default class Login extends Vue {
     text: string = 'Profile page';
     logout(){
        this.$store.dispatch(ActionsEnum.logout).then(()=>{
           this.$router.push({name: RoutesEnum.home})
        })
     }
  }
</script>
