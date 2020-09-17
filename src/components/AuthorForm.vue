<template>
  <div>

    <div class="field">
      <label class="label">Author Name</label>
      <div class="control">
        <input class="input" type="text" v-model="author" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" v-on:click="searchAuthor()">Search</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "AuthorForm",
  props: [
    "author",
    "searchAuthor"
    ],
};
</script>

<style>
</style>