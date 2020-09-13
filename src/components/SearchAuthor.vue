<template>
  <div>
    
      <input type="text" v-model="author" />
      
      <button v-on:click="searchAuthor()">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchAuthor",
  props: [
    "searchAuthor",
    "author"
    ],
  computed:{
    search(){
      return this.searchAuthor(this.author);
    }
  }
};
</script>

<style>
</style>