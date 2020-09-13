<template>
  <div>
    <input type="text" value="" />
    <button v-on:click="searchAuthor">Search</button>
  </div>
</template>

<script>
export default {
    name: 'SearchAuthor',
    props: [
      "searchAuthor"
    ]
};
</script>

<style>
</style>