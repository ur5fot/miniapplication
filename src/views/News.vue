<template>
   <div>
      <h1>{{text}}</h1>
      <article-news v-for="article of news">
         <template v-slot:title>
            {{article.title}}
         </template>
         <template v-slot:content>
            {{article.content}}
         </template>
      </article-news>
   </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ArticleNews from "@/components/ArticleNews.vue";
  import { NewsInterface } from "@/models/NewsInterface";

  @Component({
     components: {
        ArticleNews,
     },
  })
  export default class Login extends Vue {
     text: string = 'News page';
     news : NewsInterface[] = this.$store.getters.news;

  }
</script>
